import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// entry point of the React application
// renders the App.js component into the root element of the HTML page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start Ameasuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
