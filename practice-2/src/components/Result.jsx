import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Result.module.css";

const Result = (props) => {
  const navigate = useNavigate();
  const homeNavigateHandler = () => {
    navigate("/");
  };
  var array1 = props.quizData;
  var array2 = props.selectedAns;
  const found = array1.filter((val, index) => {
    console.log("index", index); // Stops at array1.length - 1
    return array2.includes(val.answer);
  });
  return (
    <Fragment>
      <div className={classes["whole-result"]}>
        <h1>Result</h1>
        <h2>Name: {props.name}</h2>
        <h2>Score: {found.length}</h2>
      </div>
      <div className={classes.answers}>
        <div>
          <h3>Your Answers</h3>
          {props.selectedAns.map((ans) => {
            return <p>{ans}</p>;
          })}
        </div>
        <div>
          <h3>Correct Answers</h3>
          {props.quizData.map(ans=>{
            return<p>{ans.answer}</p>
          })}
        </div>
      </div>
      <br/>
      <br/>
      <div className={classes["go-to-home-button"]}>
        <button onClick={homeNavigateHandler}>Go to home</button>
      </div>
    </Fragment>
  );
};

export default Result;
