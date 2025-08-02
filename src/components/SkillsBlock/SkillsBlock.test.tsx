import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import {
    skillsBlockItemCarouselDataTestId,
    skillsBlockItemWrapperDataTestId,
} from '../../utils/dataTestIds';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { SkillsBlock } from './SkillsBlock';
import '@testing-library/jest-dom';

const expectedNumberOfBlocksRendered = 6;
const expectedNumberOfSlidesRendered = expectedNumberOfBlocksRendered * 3; // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', hence the triplication

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <SkillsBlock />
        </MockProviders>,
    );
};

describe('<SkillsBlock />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const title = screen.getByText(textsPt.skills);
        const block1Title = screen.getByText(textsPt.socialMediaStrategy);
        const block2Title = screen.getByText(textsPt.socialMediaConsulting);
        const block3Title = screen.getByText(textsPt.communityManagement);
        const block4Title = screen.getByText(textsPt.paidSocialAndSearch);
        const block5Title = screen.getByText(textsPt.optimizationAndAnalysis);
        const block6Title = screen.getByText(textsPt.contentCreation);

        const numberOfBlocks = screen.getAllByTestId(skillsBlockItemWrapperDataTestId);
        const carouselItemWrapper = screen.queryByTestId(skillsBlockItemCarouselDataTestId);

        expect(title).toBeInTheDocument();
        expect(block1Title).toBeInTheDocument();
        expect(block2Title).toBeInTheDocument();
        expect(block3Title).toBeInTheDocument();
        expect(block4Title).toBeInTheDocument();
        expect(block5Title).toBeInTheDocument();
        expect(block6Title).toBeInTheDocument();

        expect(numberOfBlocks).toHaveLength(expectedNumberOfBlocksRendered);
        expect(carouselItemWrapper).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

        const title = screen.getByText(textsEn.skills);
        const block1Title = screen.getByText(textsEn.socialMediaStrategy);
        const block2Title = screen.getByText(textsEn.socialMediaConsulting);
        const block3Title = screen.getByText(textsEn.communityManagement);
        const block4Title = screen.getByText(textsEn.paidSocialAndSearch);
        const block5Title = screen.getByText(textsEn.optimizationAndAnalysis);
        const block6Title = screen.getByText(textsEn.contentCreation);

        expect(title).toBeInTheDocument();
        expect(block1Title).toBeInTheDocument();
        expect(block2Title).toBeInTheDocument();
        expect(block3Title).toBeInTheDocument();
        expect(block4Title).toBeInTheDocument();
        expect(block5Title).toBeInTheDocument();
        expect(block6Title).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on tablet', () => {
        setJestWindowWidth(Breakpoint.Tablet);

        const { container } = renderComponent();

        const carouselItemWrapper = screen.getAllByTestId(skillsBlockItemCarouselDataTestId);
        const numberOfBlocks = screen.queryByTestId(skillsBlockItemWrapperDataTestId);

        expect(carouselItemWrapper).toHaveLength(expectedNumberOfSlidesRendered);
        expect(numberOfBlocks).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        const carouselItemWrapper = screen.getAllByTestId(skillsBlockItemCarouselDataTestId);
        const numberOfBlocks = screen.queryByTestId(skillsBlockItemWrapperDataTestId);

        expect(carouselItemWrapper).toHaveLength(expectedNumberOfSlidesRendered);
        expect(numberOfBlocks).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
