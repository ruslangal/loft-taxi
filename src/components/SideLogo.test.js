import React from 'react';
import SideLogo from './SideLogo';
import { render, fireEvent, screen } from '@testing-library/react'

describe('SideLogo', function() {
    it('shows component with correct structure', function() {
        const MockSideLogo = () => <SideLogo navigateTo={(page) => {}} />;

        render(<MockSideLogo />);
        
        expect(screen.getByTestId('side-logo')).toMatchSnapshot();
    });

    if('calls navigatoTo function on logo click', function() {
        const navigateTo = jest.fn();
        const MockSideLogo = () => <SideLogo navigateTo={navigateTo} />;

        render(<MockSideLogo />);

        fireEvent.click(screen.getByTestId('side-logo__link'));

        expect(navigateTo).toHaveBeenCalledTimes(1);
    });
});