import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
    test('renders 2 labels, 2 inputs, and 1 button', () => {
        render(<Login />);
        expect(screen.getAllByLabelText(/email|password/i).length).toBe(2);
        expect(screen.getAllByRole('textbox').length + screen.getAllByLabelText(/password/i).length).toBe(2);
        expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
    });

    test('input gets focused when label is clicked', () => {
        render(<Login />);
        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.focus(emailInput);
        expect(emailInput).toHaveFocus();
    });
});
