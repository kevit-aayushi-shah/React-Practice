import React, { Fragment, useState } from "react";
import classes from "./Question.module.css";
import Result from "../components/Result";

const Quiz = (props) => {
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  // const [focus,setFocus]=useState(false)

  if (currentQues + 1 > 5) {
    return <Result score={score} />;
  }

  const forwardClickHandler = (event) => {
    event.preventDefault();
    const nextQues = currentQues + 1;
    setCurrentQues(nextQues);
  };
  const backwardClickHandler = (event) => {
    event.preventDefault();
    const prevQues = currentQues - 1;
    setCurrentQues(prevQues);
  };
  const checkAnswerHandler = (event) => {
    console.log("current ques " + currentQues);
    if (event.target.value === props.quizData[currentQues].answer) {
      // setFocus(true)
      const updateScore = score + 1;
      setScore(updateScore);
      console.log(updateScore);
    }
  };
  // const buttonClass=focus?classes['option-button-active']:classes['option-button']
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
            {props.quizData[currentQues].question}
          </p>
          {props.quizData[currentQues].options.map((option, i) => {
            return (
              <button
                key={i}
                className={classes["option-button"]}
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
