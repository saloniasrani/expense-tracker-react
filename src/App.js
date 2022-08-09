import "./styles.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </GlobalProvider>
  );
}
