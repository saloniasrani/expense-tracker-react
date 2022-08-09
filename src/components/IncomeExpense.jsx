import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const currencyMapping = { euro: "€", dollar: "$", rupee: "₹" };

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const output = transactions.reduce((acc, curr) => {
    let value = Number(curr.amount);
    acc[curr.currency] = acc[curr.currency] ?? { income: 0, expense: 0 };

    if (value >= 0) {
      acc[curr.currency].income += value;
    } else {
      acc[curr.currency].expense += Math.abs(value);
    }

    return acc;
  }, {});
  return (
    <div className="inc-exp-container">
      <h4>Income</h4>
      <h4>Expense</h4>

      {Object.keys(output).map((currency) => {
        return (
          <>
            <div className="money plus">
              {currencyMapping[currency]}
              {output[currency].income}
            </div>

            <div className="money minus">
              {currencyMapping[currency]}
              {output[currency].expense}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default IncomeExpense;
