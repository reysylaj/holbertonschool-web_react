import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Holberton logo" />
          <h1>School dashboard</h1>
        </header>

        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>

        <footer className="App-footer">
          <p>
            Copyright {getCurrentYear()} {getFooterCopy(false)}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
