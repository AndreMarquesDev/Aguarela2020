import type { RenderResult } from '@testing-library/react';
import type { LayoutProps } from './Layout';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import React from 'react';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { Layout } from './Layout';
import '@testing-library/jest-dom';

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
        </MockProviders>,
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
