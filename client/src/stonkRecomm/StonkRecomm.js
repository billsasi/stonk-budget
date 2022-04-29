import './StonkRecomm.css';
import { useState } from 'react';
import Input from './components/Input';
import StockList from './components/StockList';
import axios from 'axios';
import { NavBar } from '../Utils';

function StonkRecomm() {
  const [stocks, setStocks] = useState([]);
  const [results, setResults] = useState([]);
  const [rankDict, setRankDict] = useState({});
  const [priceDict, setPriceDict] = useState({});
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [err, setErr] = useState(false);

  const setStockList = async (stocks) => {
    setStocks(stocks);
    if (stocks.length < 3) {
      setErr(true);
      return;
    } else setErr(false);
    setLoading(true);
    const { data } = await axios.post('http://127.0.0.1:5000', stocks);
    console.log(data);
    setLoading(false);
    setResults(data[0]);
    setRankDict(data[1]);
    setPriceDict(data[2]);
    setReady(true);
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1 style={{ fontSize: '3em' }} className="title">
          StonkRecomm
        </h1>
      </header>

      <Input handleAddStocks={setStockList} />
      {err && <h3 style={{ color: 'red' }}>Error: Enter at least 3 stocks</h3>}
      {loading && <h1>Fetching Results...</h1>}
      {ready && (
        <StockList
          stocks={results}
          dict={rankDict}
          prices={priceDict}
          isTopResults={true}
        />
      )}
      {ready && (
        <StockList
          stocks={stocks}
          dict={rankDict}
          prices={priceDict}
          isTopResults={false}
        />
      )}
    </div>
  );
}

export default StonkRecomm;
