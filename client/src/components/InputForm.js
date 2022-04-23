import React, { useState } from 'react';

const InputForm = ({ handleAddTransaction }) => {
  const [transaction, setTransaction] = useState({
    type: '',
    description: '',
    amount: 0,
    date: new Date().toLocaleDateString(),
  });
  const [addItem, setAddItem] = useState(false);

  const handleDescChange = (e) => {
    setTransaction({ ...transaction, description: e.target.value });
  };
  const handleAmtChange = (e) => {
    setTransaction({ ...transaction, amount: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTransaction({
      ...transaction,
      id: Math.ceil(Math.random() * 100000000),
    });
    setTransaction({ ...transaction, description: '', amount: '' });
  };

  const { description, amount } = transaction;

  return (
    <div className="input-form">
      <button onClick={() => setAddItem(!addItem)}>Add Item</button>
      {addItem && (
        <form onSubmit={handleSubmit}>
          <input
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
