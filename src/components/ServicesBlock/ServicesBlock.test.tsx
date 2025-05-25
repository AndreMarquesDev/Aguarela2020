import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import {
    servicesBlockItemCarouselDataTestId,
    servicesBlockItemWrapperDataTestId,
} from '../../utils/dataTestIds';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { ServicesBlock } from './ServicesBlock';
import '@testing-library/jest-dom';

const expectedNumberOfBlocksRendered = 3;
const expectedNumberOfSlidesRendered = expectedNumberOfBlocksRendered * 3; // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', hence the triplication

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <ServicesBlock />
        </MockProviders>,
    );
};

describe('<ServicesBlock />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

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

        expect(numberOfBlocks).toHaveLength(expectedNumberOfBlocksRendered);
        expect(carouselItemWrapper).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

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

        expect(container).toMatchSnapshot();
    });

    it('renders properly on tablet', () => {
        setJestWindowWidth(Breakpoint.Tablet);

        const { container } = renderComponent();

        const carouselItemWrapper = screen.getAllByTestId(servicesBlockItemCarouselDataTestId);
        const numberOfBlocks = screen.queryByTestId(servicesBlockItemWrapperDataTestId);

        expect(carouselItemWrapper).toHaveLength(expectedNumberOfSlidesRendered);
        expect(numberOfBlocks).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        const carouselItemWrapper = screen.getAllByTestId(servicesBlockItemCarouselDataTestId);
        const numberOfBlocks = screen.queryByTestId(servicesBlockItemWrapperDataTestId);

        expect(carouselItemWrapper).toHaveLength(expectedNumberOfSlidesRendered);
        expect(numberOfBlocks).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
