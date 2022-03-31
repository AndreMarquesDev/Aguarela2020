import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import * as nextRouter from 'next/router';
import { Layout, LayoutProps } from './Layout';
import { NavLinksContext } from '../context/NavLinksContext';
import { Breakpoint } from '../../utils/useWindowSize';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn } from '../../utils/texts';

// @ts-ignore
nextRouter.useRouter = jest.fn(() => ({
    route: '/',
    query: {
        language: 'pt',
    },
}));

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

    test('renders properly in English', () => {
        (nextRouter.useRouter as jest.Mock).mockImplementation(() => ({
            route: '/',
            query: {
                language: 'en',
            },
        }));

        const { container } = renderComponent();

        const aboutLink = screen.getByText(textsEn.about);

        expect(aboutLink).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
