import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { projectsListNoCarouselDataTestId } from '../../utils/dataTestIds';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { ProjectsList } from './ProjectsList';
import '@testing-library/jest-dom';

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <ProjectsList />
        </MockProviders>,
    );
};

describe('<ProjectsList />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const title = screen.getByText(textsPt.projects);
        const button = screen.getByText(textsPt.seeMore);
        const noCarouselWrapper = screen.getByTestId(projectsListNoCarouselDataTestId);

        const numberOfItems = screen.getAllByRole('img');

        expect(title).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(noCarouselWrapper).toBeInTheDocument();

        expect(numberOfItems.length).toBe(3);

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

        const title = screen.getByText(textsEn.projects);
        const button = screen.getByText(textsEn.seeMore);

        expect(title).toBeInTheDocument();
        expect(button).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on tablet', () => {
        setJestWindowWidth(Breakpoint.Tablet);

        const { container } = renderComponent();

        const noCarouselWrapper = screen.queryByTestId(projectsListNoCarouselDataTestId);

        expect(noCarouselWrapper).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        const noCarouselWrapper = screen.queryByTestId(projectsListNoCarouselDataTestId);

        expect(noCarouselWrapper).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
