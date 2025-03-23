import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
    const handleClose = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="notifications">
            <button
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                }}
                aria-label="Close"
                onClick={handleClose}
            >
                <img src={closeIcon} alt="close icon" />
            </button>

            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
        </div>
    );
}

export default Notifications;
