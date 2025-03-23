import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders 1 header cell with colspan=2 when textSecondCell is null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
    const cell = screen.getByText(/available courses/i);
    expect(cell).toHaveAttribute('colspan', '2');
});

test('renders 2 header cells when textSecondCell is present', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
    expect(screen.getByText('Course name')).toBeInTheDocument();
    expect(screen.getByText('Credit')).toBeInTheDocument();
});

test('renders 2 data cells when isHeader is false', () => {
    render(<CourseListRow textFirstCell="React" textSecondCell="40" />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
});
