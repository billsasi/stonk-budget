import React, { useState } from 'react';

const Overview = ({ transactions }) => {
  const [income, setIncome] = useState(0);

  const getBal = () => {
    let sum = 0;
    transactions.forEach((item) => (sum += item.amt));
    return sum;
  };

  const net = income - getBal();

  return (
    <div className="overview">
      <h1 className={net > -1 ? 'positive' : 'negative'}>Balance ${net}</h1>
      <input
        placeholder="Income"
        onChange={(e) => setIncome(e.target.value)}
      ></input>
    </div>
  );
};

export default Overview;
