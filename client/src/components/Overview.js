import React, { useEffect, useState } from 'react';
import { monthDict } from '../Utils';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Overview = ({ transactions, month, handleIncomeChange }) => {
  const [income, setIncome] = useState(0);
  const [edit, setEdit] = useState(false);
  const [available, setAvailable] = useState(income);

  const getTotalExpense = () => {
    let sum = 0;
    transactions.forEach((item) => {
      if (item.date.month === month.month && item.date.year === month.year)
        sum += item.amount;
    });
    return sum;
  };

  const onSliderChange = (e) => {
    console.log(e.target.value);
    setAvailable((income - 0.01 * e.target.value * income).toFixed(2));
  };

  const submitIncome = (e) => {
    e.preventDefault();
    handleIncomeChange(income, month);
    setEdit(false);
  };

  let val;
  function valuetext(value) {
    val = value;
  }

  const net = income - getTotalExpense();

  useEffect(() => {
    setIncome(5000);
  }, []);
  useEffect(() => {
    setAvailable((income - 0.01 * val * income).toFixed(2));
  }, [income, val]);

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <>
      <div className="overview">
        <div className="balance-info">
          <h2>
            Available Income: $
            {Number(parseFloat(available).toFixed(2)).toLocaleString(
              'en',
              options
            )}
          </h2>
          <h1 className={net > -1 ? 'positive' : 'negative'}>
            Total: $
            {Number(parseFloat(getTotalExpense()).toFixed(2)).toLocaleString(
              'en',
              options
            )}
          </h1>
          {available < getTotalExpense() && (
            <h3 style={{ color: 'red' }}>Spending exceeds available income</h3>
          )}
        </div>
        <div className="monthly-budget">
          <h2>
            {monthDict[month.month]} {month.year}
          </h2>
          <div>
            <span>Budget: ${income} </span>
            {edit ? (
              <form onSubmit={submitIncome}>
                <input
                  placeholder="Income"
                  onChange={(e) => setIncome(e.target.value)}
                  value={income}
                ></input>
                <button className="income-button">Submit</button>
              </form>
            ) : (
              <button className="income-button" onClick={() => setEdit(true)}>
                Change
              </button>
            )}
          </div>
        </div>
      </div>
      <Box className="savings-slider" sx={{ width: 400 }}>
        <h3>Enter what % you want to save:</h3>
        <Slider
          onChange={onSliderChange}
          getAriaValueText={valuetext}
          aria-label="Savings Percent"
          defaultValue={20}
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
