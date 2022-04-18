import React, { useState } from 'react';

const InputForm = () => {
  const [addItem, setAddItem] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  };

  return (
    <div className="input-form">
      <button onClick={() => setAddItem(!addItem)}>Add Item</button>
      {addItem && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter transaction"
            value={input}
            onChange={handleChange}
          ></input>
          <button type="submit">+</button>
        </form>
      )}
    </div>
  );
};

export default InputForm;
