import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';
import { Layout, LayoutProps } from './Layout';
import { Breakpoint } from '../../utils/useWindowSize';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn } from '../../utils/texts';
import { MockProviders } from '../../utils/jest/MockProviders';

const baseProps: LayoutProps = {
    children: (
        <div>
            <p>Child</p>
        </div>
    ),
};

const renderComponent = (isMenuOpen = false): RenderResult => {
    return render(
        <MockProviders isMenuOpen={isMenuOpen}>
            <Layout {...baseProps} />
        </MockProviders>
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

        const { container } = renderComponent(true);

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        mockRouter.query = {
            language: 'en',
        };

        const { container } = renderComponent();

        const aboutLink = screen.getByText(textsEn.about);

        expect(aboutLink).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
