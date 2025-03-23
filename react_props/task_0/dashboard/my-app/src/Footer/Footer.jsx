import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
    return (
        <footer className="App-footer">
            <p>Copyright {getCurrentYear()} {getFooterCopy(false)}</p>
        </footer>
    );
}

export default Footer;
