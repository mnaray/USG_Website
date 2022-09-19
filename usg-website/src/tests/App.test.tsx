import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/We are USG! 🎮/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders info text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Our Website will be up soon!/i);
  expect(linkElement).toBeInTheDocument();
});
