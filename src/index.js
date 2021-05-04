import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Provide from './contextProvider';
import App from './App';
import './index.css';
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
