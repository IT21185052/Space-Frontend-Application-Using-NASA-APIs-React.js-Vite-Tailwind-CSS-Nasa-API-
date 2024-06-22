// Intro.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Intro from '../../components/Intro/Intro'; // Adjust the import path as necessary

describe('Intro Component', () => {
  test('renders without crashing and contains specific elements', () => {
    render(<Intro />);
    const titleElement = screen.getByText(/TOUCH WITH EARTH/i);
    expect(titleElement).toBeInTheDocument();

    const learnMoreButton = screen.getByText(/LEARN MORE/i);
    expect(learnMoreButton).toBeInTheDocument();
  });
});
