import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const currencyMapping = { euro: "€", dollar: "$", rupee: "₹" };
const Transaction = (props) => {
  const { transaction } = props;
  const sign = transaction?.amount < 0;
  const classes = sign ? "minus" : "plus";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={classes + " listing"}>
      {transaction?.text}
      <span>
        {currencyMapping[transaction?.currency]}
        {transaction?.amount}
      </span>
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
