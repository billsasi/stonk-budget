import Select from 'react-select';
import React, { useState, useRef } from 'react';
import categoryOptions from '../constants';

const InputForm = ({ handleAddTransaction }) => {
  const [transaction, setTransaction] = useState({
    type: '',
    description: '',
    amount: '',
    category: categoryOptions[0].label,
    date: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
  });
  const [addItem, setAddItem] = useState(false);
  const inputRef = useRef(null);
  const [dateStr, setDateStr] = useState('');

  const handleDescChange = (e) => {
    setTransaction({ ...transaction, description: e.target.value });
  };
  const handleAmtChange = (e) => {
    if (e.target.value > -1)
      setTransaction({ ...transaction, amount: Number(e.target.value) });
  };
  const handleCatChange = (cat) => {
    console.log(cat);
    setTransaction({ ...transaction, category: cat.label });
  };
  const handleDateChange = (e) => {
    setDateStr(e.target.value);
    setTransaction({
      ...transaction,
      date: {
        day: Number(e.target.value.split('/')[1]),
        month: Number(e.target.value.split('/')[0]),
        year: new Date().getFullYear(),
      },
    });
  };

  const { description, amount, category, date } = transaction;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length < 1 || !amount) return;
    handleAddTransaction(transaction);
    setTransaction({ ...transaction, description: '', amount: '', date: '' });
    inputRef.current.focus();
  };

  return (
    <div className="input-form">
      <button onClick={() => setAddItem(!addItem)}>Add Item</button>
      {addItem && (
        <form onSubmit={handleSubmit}>
          <Select
            options={categoryOptions}
            getValue={category}
            onChange={handleCatChange}
          ></Select>
          <input
            ref={inputRef}
            placeholder="Enter transaction"
            value={description}
            onChange={handleDescChange}
          ></input>
          <input
            placeholder="$"
            value={amount}
            onChange={handleAmtChange}
          ></input>
          <input
            placeholder="Date: D/M"
            value={dateStr}
            onChange={handleDateChange}
          ></input>
          <button type="submit">+</button>
        </form>
      )}
    </div>
  );
};

export default InputForm;
