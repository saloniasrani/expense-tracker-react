import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { addTransaction } = useContext(GlobalContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+&euro;0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-&euro;0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
