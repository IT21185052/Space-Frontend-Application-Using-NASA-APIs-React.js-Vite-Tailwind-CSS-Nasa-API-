// PhotoOfDay.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import PhotoOfDay from './PhotoOfDay';

describe('PhotoOfDay Component', () => {
  test('renders correctly', () => {
    render(<PhotoOfDay />);

    // Check if the heading is rendered
    const headingElement = screen.getByRole('heading', { name: /Photo of the Day/i });
    expect(headingElement).toBeInTheDocument();

    // Check if the input field for selecting date is rendered
    const inputElement = screen.getByPlaceholderText(/Select a date/i);
    expect(inputElement).toBeInTheDocument();
  });
});
