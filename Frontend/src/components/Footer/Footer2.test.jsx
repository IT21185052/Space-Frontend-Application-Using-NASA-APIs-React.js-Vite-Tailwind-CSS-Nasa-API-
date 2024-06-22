// Footer2.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer2 from './Footer2';

describe('Footer2 Component', () => {
  test('renders "Be Ready To Touch With Nasa" text', () => {
    render(<Footer2 />);
    const textElement = screen.getByText(/Be Ready To Touch With Nasa/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders "Important Links" text', () => {
    render(<Footer2 />);
    const textElement = screen.getByText(/Important Links/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders "Contact Us" text', () => {
    render(<Footer2 />);
    const textElement = screen.getByText(/Contact Us/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders privacy policy and terms & conditions links', () => {
    render(<Footer2 />);
    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    const termsConditionsLink = screen.getByText(/Terms & Conditions/i);
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(termsConditionsLink).toBeInTheDocument();
  });
});
