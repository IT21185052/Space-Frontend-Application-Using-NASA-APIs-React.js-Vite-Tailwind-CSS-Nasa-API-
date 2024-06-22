// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders Intro component', () => {
    render(<Home />);
    const introElement = screen.getByTestId('intro-component');
    expect(introElement).toBeInTheDocument();
  });
});
