import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MenuIcon, MenuIconProps } from './MenuIcon';

const baseProps: MenuIconProps = {
    isOpen: false,
    isVisible: false,
    onClick: jest.fn(),
};

const renderComponent = (newProps?: Partial<MenuIconProps>): RenderResult => {
    return render(<MenuIcon {...baseProps} {...newProps} />);
};

describe('<MenuIcon />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(container).toMatchSnapshot();
    });

    test('renders properly when menu is open', () => {
        const { container } = renderComponent({ isOpen: true });

        expect(container).toMatchSnapshot();
    });

    test('renders properly when the icon is visible is open', () => {
        const { container } = renderComponent({ isVisible: true });

        expect(container).toMatchSnapshot();
    });
});
