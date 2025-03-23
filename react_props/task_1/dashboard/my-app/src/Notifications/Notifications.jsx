import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-button.png';

function Notifications({ notifications }) {
    const handleClose = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="notifications">
            <button
                style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none' }}
                aria-label="Close"
                onClick={handleClose}
            >
                <img src={closeIcon} alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                {notifications.map((item) => (
                    <NotificationItem
                        key={item.id}
                        type={item.type}
                        value={item.value}
                        html={item.html}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
