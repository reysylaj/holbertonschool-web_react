import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

const testCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
];

test('renders 5 rows with course data', () => {
    render(<CourseList courses={testCourses} />);
    expect(screen.getAllByRole('row')).toHaveLength(5); // 2 headers + 3 courses
});

test('renders "No course available yet" when empty array', () => {
    render(<CourseList courses={[]} />);
    expect(screen.getByText(/no course available yet/i)).toBeInTheDocument();
});
