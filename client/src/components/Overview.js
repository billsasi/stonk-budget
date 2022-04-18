import React, { useState } from 'react';

const Overview = () => {
  const [bal, setBal] = useState(1000);
  const [balSign, setBalSign] = useState(true);

  return (
    <div className="overview">
      <h1 className={balSign ? 'positive' : 'negative'}>Balance ${bal}</h1>
    </div>
  );
};

export default Overview;
