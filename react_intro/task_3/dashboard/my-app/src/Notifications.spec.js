import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

console.log = jest.fn(); // mock console.log to test side effects

describe('Notifications component', () => {
    beforeEach(() => {
        render(<Notifications />);
    });

    test('renders the notification title text', () => {
        const title = screen.getByText(/here is the list of notifications/i);
        expect(title).toBeInTheDocument();
    });

    test('renders the close button', () => {
        const closeBtn = screen.getByRole('button', { name: /close/i });
        expect(closeBtn).toBeInTheDocument();
    });

    test('renders 3 list items', () => {
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
    });

    test('clicking close button logs message to console', () => {
        const closeBtn = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeBtn);
        expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
    });
});
