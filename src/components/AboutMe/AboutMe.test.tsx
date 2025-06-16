import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { AboutMe } from './AboutMe';
import '@testing-library/jest-dom';

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <AboutMe />
        </MockProviders>,
    );
};

describe('<AboutMe />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.about)).toBeInTheDocument();
        expect(screen.getByText(textsPt.hiMyNameIs)).toBeInTheDocument();
        expect(screen.getByText(textsPt.withMoreThan)).toBeInTheDocument();
        expect(screen.getByText(textsPt.theSocialMediaCommunicationStrategy)).toBeInTheDocument();
        expect(screen.getByText(textsPt.getToKnowMeBetter)).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.getElementsByClassName('alignCenter').length).toBe(0);
        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

        expect(screen.getByText(textsEn.about)).toBeInTheDocument();
        expect(screen.getByText(textsEn.hiMyNameIs)).toBeInTheDocument();
        expect(screen.getByText(textsEn.withMoreThan)).toBeInTheDocument();
        expect(screen.getByText(textsEn.theSocialMediaCommunicationStrategy)).toBeInTheDocument();
        expect(screen.getByText(textsEn.getToKnowMeBetter)).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.getElementsByClassName('alignCenter').length).toBe(0);
        expect(container).toMatchSnapshot();
    });

    test('renders properly in mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        expect(container.getElementsByClassName('alignCenter').length).toBe(1);
        expect(container).toMatchSnapshot();
    });
});
