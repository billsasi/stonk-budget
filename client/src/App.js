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

  const handleIncMonth = () => {
    const newMonth = month.month === 12 ? 1 : month.month + 1;
    const newYear = newMonth == 1 ? month.year + 1 : month.year;
    setMonth({ month: newMonth, year: newYear });
  };

  // const handleIncMonth = () => {
  //   setMonth({
  //     month: month.month === 12 ? 1 : month.month + 1,
  //     year: month.month == 1 ? month.year + 1 : month.year,
  //   });
  //   console.log(month);
  // };

  const handleDecMonth = () => {
    const newMonth = month.month === 1 ? 12 : month.month - 1;
    const newYear = newMonth == 12 ? month.year - 1 : month.year;
    setMonth({ month: newMonth, year: newYear });
  };

  useEffect(() => {
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

  console.log(month);

  return (
    <div className="container">
      <Overview transactions={transactions} month={month} />
      <InputForm handleAddTransaction={addTransaction} />
      <div className="month-list">
        <button className="nav" onClick={handleDecMonth}>
          Prev
        </button>
        <TransactionHistory
          transactions={transactions}
          handleDeleteTransaction={deleteTransaction}
          handleedit={handleEdit}
          month={month}
        />
        <button className="nav" onClick={handleIncMonth}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
