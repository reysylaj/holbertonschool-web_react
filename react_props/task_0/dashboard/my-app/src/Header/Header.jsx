import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="Holberton logo" />
            <h1>School dashboard</h1>
        </header>
    );
}

export default Header;
