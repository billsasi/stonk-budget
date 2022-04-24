import React, { useState, useRef } from 'react';

const InputForm = ({ handleAddTransaction }) => {
  const [transaction, setTransaction] = useState({
    type: '',
    description: '',
    amount: '',
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

  const { description, amount } = transaction;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length < 1 || !amount) return;
    handleAddTransaction({
      ...transaction,
      id: Math.ceil(Math.random() * 100000000),
    });
    setTransaction({ ...transaction, description: '', amount: '' });
    inputRef.current.focus();
  };

  return (
    <div className="input-form">
      <button onClick={() => setAddItem(!addItem)}>Add Item</button>
      {addItem && (
        <form onSubmit={handleSubmit}>
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
