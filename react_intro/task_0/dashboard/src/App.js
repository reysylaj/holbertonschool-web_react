import React from 'react';
import HolbertonLogo from './HolbertonLogo.png';
import './App.css';

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
      </div>

      {/* Footer */}
      <div className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
