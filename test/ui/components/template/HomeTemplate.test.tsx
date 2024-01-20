import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Profile } from './../../../../src/ui/components/organism/profile/Profile'

test('Renders Profile page correctly', async () => {
    render(<Profile />);
    const nameElement = screen.getByText(/Victor Alvarez/i);
    expect(nameElement).toBeInTheDocument();
});