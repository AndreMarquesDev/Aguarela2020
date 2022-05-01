import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { AboutMe } from './AboutMe';
import { textsEn, textsPt } from '../../utils/texts';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { Breakpoint } from '../../utils/useWindowSize';
import { MockTextsContext } from '../../utils/jest/MockTextsContext';

const renderComponent = (isEnglish = false): RenderResult => {
    return render(
        <MockTextsContext isEnglish={isEnglish}>
            <AboutMe />
        </MockTextsContext>
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
        const { container } = renderComponent(true);

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
