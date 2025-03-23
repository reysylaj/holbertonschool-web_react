import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeIcon from '../assets/close-button.png';

function Notifications({ displayDrawer, notifications }) {
    return (
        <>
            <div className="notifications-title">
                <p>Your notifications</p>
            </div>

            {displayDrawer && (
                <div className="notifications">
                    <button
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            background: 'none',
                            border: 'none',
                        }}
                        aria-label="Close"
                        onClick={() => console.log('Close button has been clicked')}
                    >
                        <img src={closeIcon} alt="close icon" />
                    </button>

                    {notifications.length > 0 ? (
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {notifications.map((n) => (
                                    <NotificationItem
                                        key={n.id}
                                        type={n.type}
                                        value={n.value}
                                        html={n.html}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>No new notification for now</p>
                    )}
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            value: PropTypes.string,
            html: PropTypes.string,
        })
    ),
};

Notifications.defaultProps = {
    displayDrawer: false,
    notifications: [],
};

export default Notifications;
