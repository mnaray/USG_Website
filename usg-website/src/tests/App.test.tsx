import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

test('renders welcome text', () => {
  render(<Home />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/We are USG! 🎮/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders info text', () => {
  render(<Home />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/Our Website will be up soon!/i);
  expect(linkElement).toBeInTheDocument();
});
