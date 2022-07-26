import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.css";

const Form = (props) => {
  const navigate=useNavigate()

  const englishClickHandler = (event) => {
    event.preventDefault();
    const english=event.target.value
    props.language(english)
    navigate('/english')
  };
  const hindiClickHandler = (event) => {
    event.preventDefault();
    const hindi = event.target.value
    props.language(hindi)
    navigate('/hindi')
  };
  return (
    <Fragment>
      <form>
        <label>Your Name</label>
        <br></br>
        <input className={classes.name}></input>
        <br></br>
        <br></br>
        <label htmlFor="gender">Gender:</label>
        <br></br>
        <input type="radio" name="gender" />
        <label htmlFor="male">Male</label>
        <br></br>
        <input type="radio" name="gender" />
        <label htmlFor="female">Female</label>
        <br></br>
        <br></br>
        <label>Educational Qualification</label>
        <br></br>
        <select>
          <option defaultChecked disabled hidden>
            Choose here
          </option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
          <option value="Diploma">Diploma</option>
          <option value="Under Graduate">Under Graduate</option>
          <option value="Graduate">Graduate</option>
        </select>
        <br></br>
        <br></br>
        <label>Birth Date</label>
        <br></br>
        <input type="date"></input>
      </form>
      <h2 className={classes['select-text']}>Select Your Language And Start The Quiz</h2>
      <div className={classes.buttons}>
        <button type="submit" onClick={englishClickHandler} value='english'>
          Start With English
        </button>
        <button type="submit" onClick={hindiClickHandler} value='hindi'>
          Start With Hindi
        </button>
      </div>
    </Fragment>
  );
};

export default Form;
