import React, { useState } from 'react';

const InputForm = ({ handleAddTransaction }) => {
  const [addItem, setAddItem] = useState(false);
  const [desc, setDesc] = useState('');
  const [amt, setAmt] = useState('');

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleAmtChange = (e) => {
    setAmt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTransaction({
      id: Math.ceil(Math.random() * 100000),
      name: desc,
      amt: Number(amt),
    });
    setDesc('');
    setAmt('');
  };

  return (
    <div className="input-form">
      <button onClick={() => setAddItem(!addItem)}>Add Item</button>
      {addItem && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter transaction"
            value={desc}
            onChange={handleDescChange}
          ></input>
          <input placeholder="$" value={amt} onChange={handleAmtChange}></input>
          <button type="submit">+</button>
        </form>
      )}
    </div>
  );
};

export default InputForm;
