// Navbar.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if the Navbar brand text is rendered
    const brandElement = screen.getByText(/NASA-SPACE/i);
    expect(brandElement).toBeInTheDocument();

    // Check if the Home link is rendered
    const homeLinkElement = screen.getByText(/Home/i);
    expect(homeLinkElement).toBeInTheDocument();

    // Check if the Features link is rendered
    const featuresLinkElement = screen.getByText(/Features/i);
    expect(featuresLinkElement).toBeInTheDocument();

    // Check if the Gallery link is rendered
    const galleryLinkElement = screen.getByText(/Gallery/i);
    expect(galleryLinkElement).toBeInTheDocument();

    // Check if the Contact link is rendered
    const contactLinkElement = screen.getByText(/Contact/i);
    expect(contactLinkElement).toBeInTheDocument();

    // Check if the APOD link is rendered
    const apodLinkElement = screen.getByText(/APOD/i);
    expect(apodLinkElement).toBeInTheDocument();

    // Check if the Mars Rover Photos link is rendered
    const marsRoverPhotosLinkElement = screen.getByText(/Mars Rover Photos/i);
    expect(marsRoverPhotosLinkElement).toBeInTheDocument();
  });
});
