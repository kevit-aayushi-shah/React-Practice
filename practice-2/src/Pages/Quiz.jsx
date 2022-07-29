import React, { Fragment, useState } from "react";
import classes from "./Question.module.css";
import Result from "../components/Result";

const Quiz = (props) => {
  const name = props.name;
  const quizData=props.quizData
  const [currentQues, setCurrentQues] = useState(0);
  const [selectedAns, setSelectedAns] = useState([]);

  if (currentQues + 1 > 5) {
    return <Result name={name} selectedAns={selectedAns} quizData={quizData}/>;
  }

  const forwardClickHandler = (event) => {
    event.preventDefault();
    const nextQues = currentQues + 1;
    setCurrentQues(nextQues);
  };
  const backwardClickHandler = (event) => {
    event.preventDefault();
    if (currentQues + 1 > 1) {
      const prevQues = currentQues - 1;
      setCurrentQues(prevQues);
    }
  };
  const checkAnswerHandler = (event) => {
    const stateToUpdate = [...selectedAns];
    stateToUpdate[currentQues] = event.target.value;
    setSelectedAns(stateToUpdate);
  };
  
  return (
    <Fragment>
      <div className={classes["whole-content"]}>
        <button
          className={classes["control-button"]}
          onClick={backwardClickHandler}
        >
          ⬅
        </button>
        <div className={classes.question}>
          <h1 className={classes["question-heading"]}>
            Question {currentQues + 1}
          </h1>
          <p className={classes["question-text"]}>
            {quizData[currentQues].question}
          </p>
          {quizData[currentQues].options.map((option, i) => {
            return (
              <button
                id={i}
                key={i}
                className={`${classes["option-button"]} ${
                  classes[
                    selectedAns[currentQues] === option &&
                      "option-button-active"
                  ]
                }`}
                value={option}
                onClick={checkAnswerHandler}
              >
                {option}
              </button>
            );
          })}
        </div>
        <button
          className={classes["control-button"]}
          onClick={forwardClickHandler}
        >
          ➡
        </button>
      </div>
    </Fragment>
  );
};

export default Quiz;
