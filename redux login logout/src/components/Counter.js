import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increase=()=>{
    dispatch(counterAction.increase(10))
  }
  const toggleCounterHandler=()=>{
    dispatch(counterAction.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1> 
     { show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

