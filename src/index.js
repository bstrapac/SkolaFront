import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import Routes from './routers/Routes';
import Header from './components/static/Header';

import './index.css';

const jsx =(
  <React.StrictMode>
    <div className="wrapper">
      <Header />
      <Routes />
    </div>
  </React.StrictMode>
);

ReactDOM.render( jsx, document.getElementById('root'));

reportWebVitals();
