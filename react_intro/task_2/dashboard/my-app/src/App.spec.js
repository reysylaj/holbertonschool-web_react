import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component - sign in form', () => {
    test('renders 2 input elements', () => {
        render(<App />);
        const inputs = screen.getAllByRole('textbox');
        const passwordInputs = screen.getAllByLabelText(/password/i); // password fields may not be textbox
        expect(inputs.length + passwordInputs.length).toBe(2);
    });

    test('renders 2 label elements with "Email" and "Password"', () => {
        render(<App />);
        const emailLabel = screen.getByLabelText(/email/i);
        const passwordLabel = screen.getByLabelText(/password/i);
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
    });

    test('renders a button with text OK', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /ok/i });
        expect(button).toBeInTheDocument();
    });
});
