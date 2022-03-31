import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { textsPt, textsEn } from '../../utils/texts';
import { TextsContext } from '../context/TextsContext';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { SkillsBlock } from './SkillsBlock';
import { Breakpoint } from '../../utils/useWindowSize';
import {
    skillsBlockItemWrapperDataTestId,
    skillsBlockItemCarouselDataTestId,
} from '../../utils/dataTestIds';

describe('<SkillsBlock />', () => {
    test('renders properly', () => {
        const { container } = render(<SkillsBlock />);

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

        expect(numberOfBlocks.length).toBe(6);
        expect(carouselItemWrapper).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <SkillsBlock />
            </TextsContext.Provider>
        );

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

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        render(<SkillsBlock />);

        const carouselItemWrapper = screen.getAllByTestId(skillsBlockItemCarouselDataTestId);
        const numberOfBlocks = screen.queryByTestId(skillsBlockItemWrapperDataTestId);

        expect(carouselItemWrapper.length).toBe(6);
        expect(numberOfBlocks).not.toBeInTheDocument();
    });
});
