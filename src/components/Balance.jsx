import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let amount = 0;
  transactions.forEach((transaction) => {
    amount += Number(transaction.amount);
  });

  return (
    <div className="balance">
      <h1 id="balance">&euro;{amount}</h1>
    </div>
  );
};

export default Balance;
