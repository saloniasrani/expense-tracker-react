import React from "react";
const Transaction = ({ transaction }) => {
  console.log(transaction);
  const sign = transaction?.amount < 0;
  const classes = sign ? "minus" : "plus";
  return (
    <li className={classes + " listing"}>
      {transaction?.text}
      <span>&euro; {transaction?.amount}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
export default Transaction;
