import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './Ex1';
import HelloWorld from './Ex2';
import App3 from './Ex3';
import Exercise4 from './Ex4';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HelloWorld />
    <App3 />
    <Exercise4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

