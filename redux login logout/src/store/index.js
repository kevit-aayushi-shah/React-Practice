import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // reducer:counterSlice.reducer
});

export default store;

// REGULAR REDUX

// import { createStore } from "redux";
// const initialValue = { counter: 0, showCounter: true };
// const counterReducer = (state = initialValue, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   } else if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   } else if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   } else {
//     return state;
//   }
// };

// const store = createStore(counterReducer);
// export default store;
