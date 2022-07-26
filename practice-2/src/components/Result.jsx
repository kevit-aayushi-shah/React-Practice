import React from 'react'
import classes from './Result.module.css'

const Result = (props) => {
  return (
    <div className={classes['whole-result']}>
      <h1>Result</h1>
      <h2>Score: {props.score}</h2>
    </div>
  )
}

export default Result
