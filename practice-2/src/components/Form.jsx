import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    const name = event.target.value;
    props.name(name);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };
  const navigate = useNavigate();
  const englishClickHandler = (event) => {
    const english = event.target.value;
    props.language(english);
    navigate("/english");
  };
  const hindiClickHandler = (event) => {
    const hindi = event.target.value;
    props.language(hindi);
    navigate("/hindi");
  };

  return (
    <Fragment>
      <form onSubmit={formSubmissionHandler}>
        <p>Please Fill all the Data to start the Quiz</p>
        <label>Your Name</label>
        <br/>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        <br/>
        {nameInputIsInvalid && (
          <p>Name must not be empty.</p>
        )}
        <label htmlFor="gender">Gender:</label>
        <br></br>
        <input type="radio" name="gender" required="required" />
        <label htmlFor="male" className={classes["gender-label"]}>
          Male
        </label>
        <br></br>
        <input type="radio" name="gender" />
        <label htmlFor="female" className={classes["gender-label"]}>
          Female
        </label>
        <br></br>
        <label>Educational Qualification</label>
        <br></br>
        <select required="required">
          <option>Choose here</option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="Diploma">Diploma</option>
          <option value="Under Graduate">Under Graduate</option>
          <option value="Graduate">Graduate</option>
        </select>
        <br></br>
        <label>Birth Date</label>
        <br></br>
        <input type="date"required="required"></input>
        <br></br>
        <br></br>
        <p>Select Your Language and Start</p>
        <div className={classes.buttons}>
          <button
            disabled={nameInputIsInvalid || !enteredNameIsValid}
            type="submit"
            onClick={englishClickHandler}
            value="english"
          >
            Start With English
          </button>
          <br></br>
          <button
            disabled={nameInputIsInvalid || !enteredNameIsValid}
            type="submit "
            onClick={hindiClickHandler}
            value="hindi"
          >
            Start With Hindi
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
