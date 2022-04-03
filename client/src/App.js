import React from 'react';
import Overview from './components/Overview';
import TransactionHistory from './components/TransactionHistory';
import InputForm from './components/InputForm';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>App</h1>
      <Overview />
      <InputForm />
      <TransactionHistory />
    </div>
  );
};

export default App;
