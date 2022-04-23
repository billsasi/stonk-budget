import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Overview = ({ transactions }) => {
  const [income, setIncome] = useState(0);
  const [available, setAvailable] = useState(income);

  const getBal = () => {
    let sum = 0;
    transactions.forEach((item) => (sum += item.amount));
    return sum;
  };

  let percent = 0;
  function valuetext(value) {
    percent = value;
  }

  const net = income - getBal();

  useEffect(() => {
    setAvailable((income - 0.01 * percent * income).toFixed(2));
  }, [income, percent]);

  return (
    <>
      <div className="overview">
        <div className="balance-info">
          <h2>Available Income: ${available}</h2>
          <h1 className={net > -1 ? 'positive' : 'negative'}>
            Balance ${net.toFixed(2)}
          </h1>
        </div>
        <div>
          <span>Monthly Income: </span>
          <input
            placeholder="Income"
            onChange={(e) => setIncome(e.target.value)}
          ></input>
        </div>
      </div>
      <Box className="savings-slider" sx={{ width: 400 }}>
        <h3>Enter what % you want to save:</h3>
        <Slider
          aria-label="Savings Percent"
          defaultValue={20}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={90}
        />
      </Box>
    </>
  );
};

export default Overview;
