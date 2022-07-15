import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=>value.trim()!=='');

  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailHandler,
  }=useInput(value=>value.includes("@"))
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    resetNameInput()
    resetEmailHandler()
    // nameInputRef.current.value = ""; //Do not use this it will alter the DOM
  };

  const nameInputClasses =
    nameInputHasError && emailInputHasError
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          // ref={nameInputRef}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError   && (
          <p className="error-text">Name must not be empty</p>
        )}
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          // ref={nameInputRef}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Enter a valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
