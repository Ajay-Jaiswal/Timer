import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signal from './Signal';
import Clock from "./Clock" ;
import Timer from "./Timer"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signal />
    <Clock />
    <Timer />
  </React.StrictMode>
);

