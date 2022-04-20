import React, { useState } from 'react';
import Overview from './components/Overview';
import TransactionHistory from './components/TransactionHistory';
import InputForm from './components/InputForm';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (item) => {
    console.log(item);
    setTransactions([item, ...transactions]);
  };

  const deleteTransaction = (id) => {
    const arr = transactions.filter((item) => item.id !== id);
    setTransactions(arr);
  };

  return (
    <div className="container">
      <Overview transactions={transactions} />
      <InputForm handleAddTransaction={addTransaction} />
      <TransactionHistory
        transactions={transactions}
        handleDeleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
