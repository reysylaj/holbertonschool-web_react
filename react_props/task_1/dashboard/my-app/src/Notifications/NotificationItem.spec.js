import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    test('renders default item with blue and correct type', () => {
        render(<NotificationItem type="default" value="Test" />);
        const item = screen.getByText('Test');
        expect(item).toHaveAttribute('data-notification-type', 'default');
    });

    test('renders urgent item with red and correct type', () => {
        render(<NotificationItem type="urgent" value="Urgent stuff" />);
        const item = screen.getByText('Urgent stuff');
        expect(item).toHaveAttribute('data-notification-type', 'urgent');
    });
});
