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
    return array2.includes(val.answer);
  });
  return (
    <Fragment>
      <div className={classes["whole-result"]}>
        <h1>Result</h1>
        <h2>Name: {props.name}</h2>
        <h2>Score: {found.length}</h2>
      </div>
      <div>
        <table className={classes.table}>
          <thead>
            <tr className={classes.headers}>
              <th>Question</th>
              <th>Your Answers</th>
              <th>Correct Answers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {props.selectedAns.map((ans, i) => {
                  return <p key={i}>Q{i + 1}</p>;
                })}
              </td>
              <td>
                {props.selectedAns.map((ans, i) => {
                  return <p key={i}>{ans}</p>;
                })}
              </td>
              <td>
                {props.quizData.map((ans, i) => {
                  return <p key={i}>{ans.answer}</p>;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className={classes["go-to-home-button"]}>
        <button onClick={homeNavigateHandler}>Go to home</button>
      </div>
    </Fragment>
  );
};

export default Result;
