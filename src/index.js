import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Orders from './components/Orders';
import Home from './components/Home';
import ChartData from './components/ChartData';
// React 18 updates
const appContainer = document.getElementById('root');
const root = ReactDOM.createRoot(appContainer);
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
