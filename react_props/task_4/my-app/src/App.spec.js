import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Login when isLoggedIn is false', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
});

test('renders CourseList when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
});
