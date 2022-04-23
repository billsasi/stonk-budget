import React, { useState } from 'react';
import Overview from './components/Overview';
import TransactionHistory from './components/TransactionHistory';
import InputForm from './components/InputForm';
import './App.css';

// hi

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

  const handleEdit = (item, id) => {
    // Find id and edit
    const updated_list = transactions.map(x => (x.id === id ? {...x, amt: item.amt, name: item.name, category: item.category} : x))
    setTransactions(updated_list)
  };

  return (
    <div className="container">
      <Overview transactions={transactions} />
      <InputForm handleAddTransaction={addTransaction} />
      <TransactionHistory
        transactions={transactions}
        handleDeleteTransaction={deleteTransaction}
        handleedit={handleEdit}
      />
    </div>
  );
};

export default App;




// comment
