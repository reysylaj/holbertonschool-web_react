import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
    test('renders "Your notifications" always', () => {
        render(<Notifications />);
        expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    });

    test('does NOT render list or button when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);
        expect(screen.queryByText(/here is the list/i)).not.toBeInTheDocument();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    test('renders list and button when displayDrawer is true with items', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' }
        ];
        render(<Notifications displayDrawer={true} notifications={notifications} />);
        expect(screen.getByText(/here is the list/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem').length).toBe(2);
    });

    test('renders "No new notification for now" when list is empty', () => {
        render(<Notifications displayDrawer={true} notifications={[]} />);
        expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    });
});
