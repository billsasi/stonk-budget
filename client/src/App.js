import React, { useState } from 'react';
import Overview from './components/Overview';
import TransactionHistory from './components/TransactionHistory';
import InputForm from './components/InputForm';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="container">
      <Overview />
      <InputForm />
      <TransactionHistory />
    </div>
  );
};

export default App;
