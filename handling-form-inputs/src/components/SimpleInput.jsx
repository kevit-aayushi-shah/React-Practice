import {useEffect,useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailWasTouched, setEnteredEmailWasTouched] = useState(false)
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);
  const [formIsValid,setFormIsValid]=useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameWasTouched;
  const enteredEmailIsValid=enteredEmail.includes("@")
  const emailInputIsValid=!enteredEmailIsValid&&enteredEmailWasTouched;
  useEffect(()=>{
    if(enteredNameIsValid&&enteredEmailIsValid){
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }

  },[enteredNameIsValid,enteredEmailIsValid])
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("name is valid");
  //   }
  // });
 
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // if (event.target.value.trim() !== "") {
    //     setEnteredNameIsValid(true)
    //   }
  };
  const emailInputChangeHandler=(event)=>{
    setEnteredEmail(event.target.value)

  }
  const onBlurInputHandler = () => {
    setEnteredNameWasTouched(true);
    setEnteredEmailWasTouched(true)
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameWasTouched(true);
    setEnteredEmailWasTouched(true)
    if (!enteredNameIsValid&&!enteredEmailIsValid) {
      return;
    }
    // setEnteredNameIsValid(true);
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    setEnteredName("");
    setEnteredEmail('')
    setEnteredNameWasTouched(false);
    setEnteredEmailWasTouched(false)
    // nameInputRef.current.value = ""; //Do not use this it will alter the DOM
  };

  const nameInputClasses = nameInputIsInvalid && emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          // ref={nameInputRef}
          value={enteredName}
          onBlur={onBlurInputHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          // ref={nameInputRef}
          value={enteredEmail}
          onBlur={onBlurInputHandler}
        />
        {emailInputIsValid && (
          <p className="error-text">Enter a valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
