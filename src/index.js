import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Provide from './contextProvider';
import './index.css';
import App from './App';
import "./styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provide>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
