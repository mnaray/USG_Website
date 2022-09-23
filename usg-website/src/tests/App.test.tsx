import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../pages/App';

test('renders welcome text', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/We are USG! 🎮/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders info text', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/Our Website will be up soon!/i);
  expect(linkElement).toBeInTheDocument();
});
