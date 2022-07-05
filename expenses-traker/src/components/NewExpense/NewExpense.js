import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isediting, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false);
  };
  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler=()=>{
    setEditing(false)
  }
  return (
    <div className="new-expense">
      {!isediting && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isediting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};
export default NewExpense;
