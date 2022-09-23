import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';

test('renders 404 page', () => {
    render(<PageNotFound />, {wrapper: BrowserRouter});
    const errorText = screen.getByText(/Error 404: Page not found!/i);
    expect(errorText).toBeInTheDocument();
});

// test('checks text color', () => {
//     render(<PageNotFound />);
//     const errorText: HTMLElement = screen.getByText(/Error 404: Page not found!/i);
//     const style = getComputedStyle(errorText);
//     expect(style).toBe('color: red');
// });