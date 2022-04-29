import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import TransactionHistory from './components/TransactionHistory';
import InputForm from './components/InputForm';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './App.css';
import { compareMonths, NavBar } from './Utils.js';
Chart.register(...registerables);

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [monthTotals, setMonthTotals] = useState({});
  const [monthIncomes, setMonthIncomes] = useState({});

  const updateMonthIncome = (inc, mo) => {
    setMonthIncomes({ ...monthIncomes, mo: inc });
  };

  useEffect(() => {
    const monthAmounts = {};
    let label = '';
    transactions.forEach((tr) => {
      label = `${tr.date.month}/${tr.date.year}`;
      if (monthAmounts[label]) monthAmounts[label] += tr.amount;
      else monthAmounts[label] = tr.amount;
    });
    const sortedAmounts = [];
    const sortedMonths = Object.keys(monthAmounts).sort(compareMonths);
    sortedMonths.forEach((mo) => {
      sortedAmounts.push(monthAmounts[mo]);
    });
    setMonthTotals({
      labels: sortedMonths,
      values: sortedAmounts,
    });
  }, [transactions]);

  const handleIncMonth = () => {
    const newMonth = month.month === 12 ? 1 : month.month + 1;
    const newYear = newMonth === 1 ? month.year + 1 : month.year;
    setMonth({ month: newMonth, year: newYear });
  };

  const handleDecMonth = () => {
    const newMonth = month.month === 1 ? 12 : month.month - 1;
    const newYear = newMonth === 12 ? month.year - 1 : month.year;
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
    console.log(item);
    await axios.post(`http://localhost:8000/transactions/update/${id}`, item);
    // Find id and edit
    const updated_list = transactions.map((x) =>
      x._id === id
        ? {
            ...x,
            amount: item.amount,
            description: item.description,
            category: item.category,
            date: item.date,
          }
        : x
    );
    setTransactions(updated_list);
  };

  const data = {
    labels: monthTotals.labels,
    datasets: [
      {
        label: 'Total Spending over Time',
        data: monthTotals.values,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="container">
      <NavBar />

      <Overview
        transactions={transactions}
        month={month}
        handleIncomeChange={updateMonthIncome}
      />
      <div className="chart" style={{ width: '600px' }}>
        <Line data={data} />
      </div>

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
