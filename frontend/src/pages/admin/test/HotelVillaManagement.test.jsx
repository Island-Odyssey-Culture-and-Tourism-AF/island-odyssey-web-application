import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HotelVillaManagement from '../HotelVillaManagement';

describe('HotelVillaManagement', () => {
  test('renders user element with name and image', () => {
    render(<HotelVillaManagement />);
    const userName = screen.getByText('John Smith');
    const userImage = screen.getByAltText('User Avatar');
    expect(userName).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
  });

  test('renders SideNavBar component', () => {
    render(<HotelVillaManagement />);
    const sideNavBar = screen.getByTestId('side-navbar');
    expect(sideNavBar).toBeInTheDocument();
  });

  test('renders heading for Hotel / Villa Management', () => {
    render(<HotelVillaManagement />);
    const heading = screen.getByRole('heading', { name: 'Hotel / Villa Management' });
    expect(heading).toBeInTheDocument();
  });

  test('renders AddHotelModal component', () => {
    render(<HotelVillaManagement />);
    const addHotelModal = screen.getByTestId('add-hotel-modal');
    expect(addHotelModal).toBeInTheDocument();
  });

  test('renders HotelCard component', () => {
    render(<HotelVillaManagement />);
    const hotelCard = screen.getByTestId('hotel-card');
    expect(hotelCard).toBeInTheDocument();
  });

  // Add more tests for component interactions, API calls, etc.
});

module.exports = {
  // ... other Jest config options
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
