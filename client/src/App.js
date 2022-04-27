import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import TransactionHistory from './components/TransactionHistory';
import InputForm from './components/InputForm';
import axios from 'axios';
import './App.css';

// hi

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const handleIncMonth = () => {};

  const handleDecMonth = () => {};

  useEffect(() => {
    console.log(month);
    async function fetchData() {
      const { data } = await axios.get('http://localhost:8000/transactions/');
      setTransactions(data);
    }
    fetchData();
  }, []);

  const addTransaction = async (item) => {
    const { data } = await axios.post(
      'http://localhost:8000/transactions/add/',
      item
    );
    setTransactions([data, ...transactions]);
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:8000/transactions/${id}`);
    const arr = transactions.filter((item) => item._id !== id);
    setTransactions(arr);
  };

  const handleEdit = async (item, id) => {
    await axios.post(`http://localhost:8000/transactions/update/${id}`, item);
    // Find id and edit
    const updated_list = transactions.map((x) =>
      x._id === id
        ? {
            ...x,
            amount: item.amount,
            description: item.description,
          }
        : x
    );
    setTransactions(updated_list);
  };

  return (
    <div className="container">
      <Overview transactions={transactions} />
      <InputForm handleAddTransaction={addTransaction} />
      <div className="month-list">
        <button className="nav" onClick={handleDecMonth}>
          Prev
        </button>
        <TransactionHistory
          transactions={transactions}
          handleDeleteTransaction={deleteTransaction}
          handleedit={handleEdit}
        />
        <button className="nav" onClick={handleIncMonth}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
