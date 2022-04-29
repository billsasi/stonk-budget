import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import StonkRecomm from './stonkRecomm/StonkRecomm';
import About from './components/About';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/stocks" element={<StonkRecomm />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
