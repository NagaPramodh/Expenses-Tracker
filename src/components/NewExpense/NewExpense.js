import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const ExpenseDataHandler = (ExpenseDataProp) => {
    const ExpenseData = {
      ...ExpenseDataProp,
      id: Math.random().toString(),
    };
    props.newExpenseData(ExpenseData);
  };
  return (
    <div className="new-expense">
      <button onClick={() => setShowNewExpense(!showNewExpense)}>
        New Expense
      </button>
      {showNewExpense && <ExpenseForm onSaveExpenseData={ExpenseDataHandler} />}
    </div>
  );
};
export default NewExpense;
