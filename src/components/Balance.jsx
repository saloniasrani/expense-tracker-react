import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const currencyMapping = { euro: "€", dollar: "$", rupee: "₹" };

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const output = transactions.reduce((acc, curr) => {
    acc[curr.currency] =
      (acc[curr.currency] ? acc[curr.currency] : 0) + Number(curr.amount);
    return acc;
  }, {});

  return (
    <div className="balance">
      <div>Balance:</div>
      {Object.keys(output).map((currency) => {
        return (
          <h1 key={currency}>
            {currencyMapping[currency]}
            {output[currency]}
          </h1>
        );
      })}
    </div>
  );
};

export default Balance;
