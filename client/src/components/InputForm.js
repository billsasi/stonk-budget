import Select from 'react-select';
import React, { useState, useRef } from 'react';
import categoryOptions from '../constants';

const InputForm = ({ handleAddTransaction }) => {
  const [transaction, setTransaction] = useState({
    type: '',
    description: '',
    amount: '',
    category: categoryOptions[0].label,
    date: new Date().toLocaleDateString(),
  });
  const [addItem, setAddItem] = useState(false);
  const inputRef = useRef(null);

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

  const { description, amount, category } = transaction;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length < 1 || !amount) return;
    handleAddTransaction(transaction);
    setTransaction({ ...transaction, description: '', amount: '' });
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
          <button type="submit">+</button>
        </form>
      )}
    </div>
  );
};

export default InputForm;
