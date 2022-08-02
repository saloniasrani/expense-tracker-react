import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};

// Creating Global Context
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (payload) => {
    dispatch({ type: "EXPEN", payload });
  };
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
