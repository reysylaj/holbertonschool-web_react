import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  // Handler for button click
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer'
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
