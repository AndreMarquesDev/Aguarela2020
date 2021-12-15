import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Layout, LayoutProps } from './Layout';
import NavLinksContext from '../context/NavLinksContext';
import { Breakpoint } from '../../utils/useWindowSize';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';

const baseProps: LayoutProps = {
    children: (
        <div>
            <p>Child</p>
        </div>
    ),
};

const renderComponent = (newProps?: Partial<LayoutProps>, isMenuOpen = false): RenderResult => {
    return render(
        <NavLinksContext.Provider value={{ isMenuOpen, toggleMenu: jest.fn() }}>
            <Layout {...baseProps} {...newProps} />
        </NavLinksContext.Provider>
    );
};

describe('<Layout />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const childElement = screen.getByText('Child');
        const logo = screen.getByAltText('Logo');

        expect(childElement).toBeInTheDocument();
        expect(logo).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly when the menu is open and the resolution is lower than desktop', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent({}, true);

        expect(container).toMatchSnapshot();
    });
});
