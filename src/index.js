import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Sass/main.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {BackendContextProvider} from './State/BackendState'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BackendContextProvider>
        <App />
      </BackendContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
