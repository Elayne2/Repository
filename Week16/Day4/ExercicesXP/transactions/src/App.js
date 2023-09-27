import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div>
      <h1>Transaction Form</h1>
      <TransactionForm />
      <h1>Transaction List</h1>
      <TransactionList />
    </div>
  );
}

export default App;