import React from 'react';
import HolbertonLogo from './HolbertonLogo.png';
import './App.css';
import { getFooterCopy, getFullYear, getFulYear } from './utils';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={HolbertonLogo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="button">OK</button>
      </div>

      {/* Footer */}
      <div className="App-footer">
        <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
