import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('renders Holberton logo', () => {
        render(<Header />);
        const logo = screen.getByAltText(/holberton logo/i);
        expect(logo).toBeInTheDocument();
    });

    test('renders h1 with text "School dashboard"', () => {
        render(<Header />);
        const heading = screen.getByRole('heading', { name: /school dashboard/i });
        expect(heading).toBeInTheDocument();
    });
});
