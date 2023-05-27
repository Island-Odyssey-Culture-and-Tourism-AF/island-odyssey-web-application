import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddHotelModal from '../AddHotelModal';

describe('AddHotelModal', () => {
  test('renders Add Hotel button', () => {
    render(<AddHotelModal />);
    const addButton = screen.getByRole('button', { name: 'Add Hotel' });
    expect(addButton).toBeInTheDocument();
  });

  test('opens modal on button click', () => {
    render(<AddHotelModal />);
    const addButton = screen.getByRole('button', { name: 'Add Hotel' });
    fireEvent.click(addButton);
    const modalTitle = screen.getByText('Add a Hotel');
    expect(modalTitle).toBeInTheDocument();
  });

  test('closes modal on Close button click', () => {
    render(<AddHotelModal />);
    const addButton = screen.getByRole('button', { name: 'Add Hotel' });
    fireEvent.click(addButton);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    const modalTitle = screen.queryByText('Add a Hotel');
    expect(modalTitle).not.toBeInTheDocument();
  });

  // Add more tests for form submission, input changes, etc.
});
