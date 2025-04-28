import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/util';
import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <div className="App">Footer.css
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default Footer;
