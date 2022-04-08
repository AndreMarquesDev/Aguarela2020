import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { textsPt, textsEn } from '../../utils/texts';
import { TextsContext } from '../context/TextsContext';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { ProjectsList } from './ProjectsList';
import { Breakpoint } from '../../utils/useWindowSize';
import { projectsListNoCarouselDataTestId } from '../../utils/dataTestIds';

const renderComponent = (): RenderResult => {
    return render(<ProjectsList />);
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
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ProjectsList />
            </TextsContext.Provider>
        );

        const title = screen.getByText(textsEn.projects);
        const button = screen.getByText(textsEn.seeMore);

        expect(title).toBeInTheDocument();
        expect(button).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        renderComponent();

        const noCarouselWrapper = screen.queryByTestId(projectsListNoCarouselDataTestId);

        expect(noCarouselWrapper).not.toBeInTheDocument();
    });
});
