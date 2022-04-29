import React, { useState } from 'react';

const Input = ({ handleAddStocks }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    console.log(input.split(' '));
    handleAddStocks(input.split(' '));
    setInput('');
  };
  return (
    <form className="sr-input-form" onSubmit={handleSubmit}>
      <input
        style={{ width: '50vw', fontSize: '2em' }}
        width={500}
        type="text"
        placeholder="Enter symbols"
        value={input}
        name="text"
        className="stock-input"
        onChange={handleChange}
        autoComplete="off"
      />
      <button className="submit-button">Recomm</button>
    </form>
  );
};

export default Input;
