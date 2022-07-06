import React, { useState, useRef, Fragment } from "react";
import classes from "./form.module.css";
import Button from "./Button";
import ErrorModal from "./UI/ErrorModal";
const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const data = {
      name: enteredName,
      age: enteredUserAge,
      id:Math.random().toString()
    };
    props.onSubmit(data);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      <div className={classes.form}>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br></br>
          <input ref={nameInputRef} id="username"/>
          <br></br>
          <br></br>
          <label>Age(years)</label>
          <br></br>
          <input type="number" ref={ageInputRef} id="age"/>
          <br></br>
          <br></br>

          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Fragment>
  );
};
export default Form;
