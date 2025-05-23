import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notification from './Notifications/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root-notification'>
      <Notification />
    </div>
    <App />
  </React.StrictMode>
);
