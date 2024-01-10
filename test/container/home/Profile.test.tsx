import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Profile } from '../../../src/Container/Home/Profile';

test('Renders Profile page correctly', async () => {
    render(<Profile />);
    const nameElement = screen.getByText(/Victor Alvarez/i);
    expect(nameElement).toBeInTheDocument();
});