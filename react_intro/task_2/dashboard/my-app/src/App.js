import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* your header code here */}
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* 🔽 Form starts here */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button>OK</button>
      </div>

      <footer className="App-footer">
        {/* your footer code here */}
      </footer>
    </div>
  );
}

export default App;
