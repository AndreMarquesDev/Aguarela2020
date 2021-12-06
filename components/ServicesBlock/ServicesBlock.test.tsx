import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { textsPt, textsEn } from '../../utils/texts';
import TextsContext from '../context/TextsContext';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import {
    ServicesBlock,
    servicesBlockItemCarouselDataTestId,
    servicesBlockItemWrapperDataTestId,
} from './ServicesBlock';

describe('<ServicesBlock />', () => {
    test('renders properly', () => {
        render(<ServicesBlock />);

        const title = screen.getByText(textsPt.services);
        const block1Title = screen.getByText(textsPt.design);
        const block1Backface1 = screen.getByText(`- ${textsPt.webDesign}`);
        const block1Backface2 = screen.getByText(`- ${textsPt.outdoorsAndFlyers}`);
        const block1Backface3 = screen.getByText(`- ${textsPt.contactCard}`);
        const block1Backface4 = screen.getByText(`- ${textsPt.socialMediaTemplates}`);
        const block1Backface5 = screen.getByText(`- ${textsPt.menus}`);
        const block2Title = screen.getByText(textsPt.socialMediaEn);
        const block2Backface1 = screen.getByText(`- ${textsPt.contentCreation}`);
        const block2Backface2 = screen.getByText(`- ${textsPt.marketAnalysis}`);
        const block2Backface3 = screen.getByText(`- ${textsPt.socialMediaStrategyAndManagement}`);
        const block2Backface4 = screen.getByText(`- ${textsPt.paidSocial}`);
        const block2Backface5 = screen.getByText(`- ${textsPt.consulting}`);
        const block3Title = screen.getByText(textsPt.digital);
        const block3Backface1 = screen.getByText(`- ${textsPt.paidSearchCampaigns}`);
        const block3Backface2 = screen.getByText(`- ${textsPt.opinionPlatformsManagement}`);

        const numberOfBlocks = screen.getAllByTestId(servicesBlockItemWrapperDataTestId);
        const carouselItemWrapper = screen.queryByTestId(servicesBlockItemCarouselDataTestId);

        expect(title).toBeInTheDocument();
        expect(block1Title).toBeInTheDocument();
        expect(block1Backface1).toBeInTheDocument();
        expect(block1Backface2).toBeInTheDocument();
        expect(block1Backface3).toBeInTheDocument();
        expect(block1Backface4).toBeInTheDocument();
        expect(block1Backface5).toBeInTheDocument();
        expect(block2Title).toBeInTheDocument();
        expect(block2Backface1).toBeInTheDocument();
        expect(block2Backface2).toBeInTheDocument();
        expect(block2Backface3).toBeInTheDocument();
        expect(block2Backface4).toBeInTheDocument();
        expect(block2Backface5).toBeInTheDocument();
        expect(block3Title).toBeInTheDocument();
        expect(block3Backface1).toBeInTheDocument();
        expect(block3Backface2).toBeInTheDocument();

        expect(numberOfBlocks.length).toBe(3);
        expect(carouselItemWrapper).not.toBeInTheDocument();
    });

    test('renders properly in English', () => {
        render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ServicesBlock />
            </TextsContext.Provider>
        );

        const title = screen.getByText(textsEn.services);
        const block1Title = screen.getByText(textsEn.design);
        const block1Backface1 = screen.getByText(`- ${textsEn.webDesign}`);
        const block1Backface2 = screen.getByText(`- ${textsEn.outdoorsAndFlyers}`);
        const block1Backface3 = screen.getByText(`- ${textsEn.contactCard}`);
        const block1Backface4 = screen.getByText(`- ${textsEn.socialMediaTemplates}`);
        const block1Backface5 = screen.getByText(`- ${textsEn.menus}`);
        const block2Title = screen.getByText(textsEn.socialMediaEn);
        const block2Backface1 = screen.getByText(`- ${textsEn.contentCreation}`);
        const block2Backface2 = screen.getByText(`- ${textsEn.marketAnalysis}`);
        const block2Backface3 = screen.getByText(`- ${textsEn.socialMediaStrategyAndManagement}`);
        const block2Backface4 = screen.getByText(`- ${textsEn.paidSocial}`);
        const block2Backface5 = screen.getByText(`- ${textsEn.consulting}`);
        const block3Title = screen.getByText(textsEn.digital);
        const block3Backface1 = screen.getByText(`- ${textsEn.paidSearchCampaigns}`);
        const block3Backface2 = screen.getByText(`- ${textsEn.opinionPlatformsManagement}`);

        expect(title).toBeInTheDocument();
        expect(block1Title).toBeInTheDocument();
        expect(block1Backface1).toBeInTheDocument();
        expect(block1Backface2).toBeInTheDocument();
        expect(block1Backface3).toBeInTheDocument();
        expect(block1Backface4).toBeInTheDocument();
        expect(block1Backface5).toBeInTheDocument();
        expect(block2Title).toBeInTheDocument();
        expect(block2Backface1).toBeInTheDocument();
        expect(block2Backface2).toBeInTheDocument();
        expect(block2Backface3).toBeInTheDocument();
        expect(block2Backface4).toBeInTheDocument();
        expect(block2Backface5).toBeInTheDocument();
        expect(block3Title).toBeInTheDocument();
        expect(block3Backface1).toBeInTheDocument();
        expect(block3Backface2).toBeInTheDocument();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(true);

        render(<ServicesBlock />);

        const carouselItemWrapper = screen.getAllByTestId(servicesBlockItemCarouselDataTestId);
        const numberOfBlocks = screen.queryByTestId(servicesBlockItemWrapperDataTestId);

        expect(carouselItemWrapper.length).toBe(3);
        expect(numberOfBlocks).not.toBeInTheDocument();
    });
});