import type { RenderResult } from '@testing-library/react';
import type { NavLinksProps } from './NavLinks';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { textsEn, textsPt } from '../../utils/texts';
import { NavLinks } from './NavLinks';
import '@testing-library/jest-dom';

const baseProps: NavLinksProps = {
    currentRoute: 'services',
    language: Locale.Pt,
    isMobile: false,
    isMenuOpen: false,
};

const renderComponent = (
    newProps?: Partial<NavLinksProps>,
    isMenuOpen = baseProps.isMenuOpen,
    language: Locale = Locale.Pt,
): RenderResult => {
    return render(
        <MockProviders isMenuOpen={isMenuOpen} language={language}>
            <NavLinks {...baseProps} {...newProps} />
        </MockProviders>,
    );
};

describe('<NavLinks />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

        const aboutLink = screen.getByText(textsPt.about);
        const projectsLink = screen.getByText(textsPt.projects);
        const servicesLink = screen.getByText(textsPt.services);
        const contactLink = screen.getByText(textsPt.contact);
        const languageButton = screen.getByText('pt');

        expect(aboutLink).toBeInTheDocument();
        expect(projectsLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
        expect(languageButton).toBeInTheDocument();

        expect(aboutLink).toHaveAttribute('href', `/${baseProps.language}/about`);
        expect(projectsLink).toHaveAttribute('href', `/${baseProps.language}/projects`);
        expect(servicesLink).toHaveAttribute('href', `/${baseProps.language}/services`);
        expect(contactLink).toHaveAttribute('href', `/${baseProps.language}/contact`);

        expect(container).toMatchSnapshot();
    });

    it('renders properly when language is en', () => {
        const { container } = renderComponent({ language: Locale.En }, false, Locale.En);

        const aboutLink = screen.getByText(textsEn.about);
        const projectsLink = screen.getByText(textsEn.projects);
        const servicesLink = screen.getByText(textsEn.services);
        const contactLink = screen.getByText(textsEn.contact);

        expect(aboutLink).toBeInTheDocument();
        expect(projectsLink).toBeInTheDocument();
        expect(servicesLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();

        expect(aboutLink).toHaveAttribute('href', '/en/about');
        expect(projectsLink).toHaveAttribute('href', '/en/projects');
        expect(servicesLink).toHaveAttribute('href', '/en/services');
        expect(contactLink).toHaveAttribute('href', '/en/contact');

        expect(container).toMatchSnapshot();
    });

    it('renders properly in mobile', () => {
        const { container } = renderComponent({ isMobile: true });

        expect(container).toMatchSnapshot();
    });

    it('renders properly when the menu is open', () => {
        const { container } = renderComponent({ isMenuOpen: true, isMobile: true }, true);

        expect(container).toMatchSnapshot();
    });
});
