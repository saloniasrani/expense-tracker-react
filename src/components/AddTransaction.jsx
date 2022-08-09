import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("dollar");
  const { addTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <div className="currency">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="dollar">$</option>
              <option value="euro">&euro;</option>
              <option value="rupee">&#8377;</option>
            </select>
          </div>
        </div>

        <div
          className="btn"
          onClick={(e) => {
            addTransaction({ text, amount, currency });
            setAmount(0);
            setText("");
          }}
        >
          Add transaction
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
