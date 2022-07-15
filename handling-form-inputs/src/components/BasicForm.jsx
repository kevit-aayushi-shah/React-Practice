import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.includes("@"));

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid && enteredLastIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid, enteredLastIsValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid && !enteredEmailIsValid && !enteredLastIsValid) {
      return;
    }
    resetNameInput();
    resetEmailHandler();
    resetLastNameHandler();
    // nameInputRef.current.value = ""; //Do not use this it will alter the DOM
  };

  // const validationClasses =
  //   nameInputHasError && emailInputHasError && lastNameInputHasError
  //     ? "form-control invalid"
  //     : "form-control";
const nameValidationClass=nameInputHasError?"form-control invalid":"form-control"
const emailValidationClass=emailInputHasError?"form-control invalid":"form-control"
const lastNameValidationClass=lastNameInputHasError?"form-control invalid":"form-control"
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameValidationClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={lastNameValidationClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            value={enteredLastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailValidationClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Enter a valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
