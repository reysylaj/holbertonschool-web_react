import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import * as utils from '../utils/utils';

describe('Footer', () => {
    test('renders copyright with isIndex = true', () => {
        jest.spyOn(utils, 'getFooterCopy').mockReturnValue('Holberton School');
        jest.spyOn(utils, 'getCurrentYear').mockReturnValue(2024);

        render(<Footer />);
        const text = screen.getByText(/copyright 2024 holberton school/i);
        expect(text).toBeInTheDocument();
    });
});
