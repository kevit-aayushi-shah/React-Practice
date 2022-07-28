import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Result.module.css";

const Result = (props) => {
  const navigate = useNavigate();

  const homeNavigateHandler = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <div className={classes["whole-result"]}>
        <h1>Result</h1>
        <h2>Name: {props.name}</h2>
        <h2>Score: {props.score}</h2>
        <br></br>
        <h3>Your Answers</h3>
        {props.selectedAns.map(ans=>{
          return <p>{ans}</p>
        })}
      </div>
      <div className={classes["go-to-home-button"]}>
        <button onClick={homeNavigateHandler}>Go to home</button>
      </div>
    </Fragment>
  );
};

export default Result;
