import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

const jsx =(
  <React.StrictMode>
    <div className="wrapper">
      <Header />
      <App />
    </div>
  </React.StrictMode>
);

ReactDOM.render( jsx, document.getElementById('root'));

reportWebVitals();
