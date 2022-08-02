import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const sign = transaction?.amount < 0;
  const classes = sign ? "minus" : "plus";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={classes + " listing"}>
      {transaction?.text}
      <span>&euro; {transaction?.amount}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          deleteTransaction(transaction.id);
        }}
      >
        x
      </button>
    </li>
  );
};
export default Transaction;
