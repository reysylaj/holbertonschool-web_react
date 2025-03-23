import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

const testList = [
    { id: 1, type: 'default', value: 'Test 1' },
    { id: 2, type: 'urgent', value: 'Test 2' },
    { id: 3, type: 'urgent', html: '<strong>Test 3</strong>' }
];

describe('Notifications', () => {
    test('renders all 3 notifications', () => {
        render(<Notifications notifications={testList} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
        expect(screen.getByText(/Test 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Test 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Test 3/i)).toBeInTheDocument();
    });
});
