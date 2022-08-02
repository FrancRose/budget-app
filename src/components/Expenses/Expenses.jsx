import React, { useState } from "react";
import Filter from "../Filter/Filter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <Filter selected={filteredYear} onChangeYear={filterChangeHandler}/>
        {expenses.map((expense) =>  (
          <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        
      </Card>
    </div>
  );
};

export default Expenses;
