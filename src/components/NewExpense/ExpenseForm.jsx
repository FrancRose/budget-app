import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // FORM BEGIN =============================================//
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* ITEM  -------------------------- */}
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        {/* END ITEM ----------------------  */}

        {/* ITEM  -------------------------- */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        {/* END ITEM ----------------------  */}

        {/* ITEM  -------------------------- */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        {/* END ITEM ----------------------  */}
      </div>
      {/* START BUTTON ======================================= */}
      <div className="new-expense__actions">
        <button type="dubmit">Add Expense</button>
      </div>
      {/* END BUTTON ========================================= */}
    </form>
  );
};

export default ExpenseForm;

// const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   setEnteredDate:''
  // });

  // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    //})

    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });