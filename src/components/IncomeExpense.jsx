import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    const value = Number(transaction.amount);
    if (value >= 0) {
      income += value;
    } else {
      expense += Math.abs(value);
    }
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+&euro;{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-&euro;{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
