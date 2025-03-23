import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
    if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.string,
    value: PropTypes.string
};

NotificationItem.defaultProps = {
    type: 'default'
};

export default NotificationItem;
