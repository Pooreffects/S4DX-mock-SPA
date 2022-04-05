import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Orders from './components/Orders';
import Home from './components/Home';
import ChartData from './components/ChartData';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="chart" element={<ChartData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
