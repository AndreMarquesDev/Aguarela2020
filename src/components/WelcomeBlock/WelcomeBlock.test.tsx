import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import * as nextRouter from 'next/router';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { WelcomeBlock } from './WelcomeBlock';
import '@testing-library/jest-dom';

// @ts-expect-error ignore for now
nextRouter.useRouter = jest.fn(() => ({
    query: {
        language: 'pt',
    },
}));

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <WelcomeBlock />
        </MockProviders>,
    );
};

describe('<WelcomeBlock />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const title1 = screen.getByText(textsPt.welcome1);
        const title2 = screen.getByText(textsPt.welcome2);
        const title3 = screen.getByText(textsPt.welcome3);
        const textBlock1 = screen.getByText(textsPt.managingsocialMedia);
        const textBlock2 = screen.getByText(textsPt.monitorAndOptimizeProcessAndStrategy);
        const textBlock3 = screen.getByText(textsPt.throughStrategicPlanning);

        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(textBlock1).toBeInTheDocument();
        expect(textBlock2).toBeInTheDocument();
        expect(textBlock3).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

        const title1 = screen.getByText(textsEn.welcome1);
        const title2 = screen.getByText(textsEn.welcome2);
        const title3 = screen.getByText(textsEn.welcome3);
        const textBlock1 = screen.getByText(textsEn.managingsocialMedia);
        const textBlock2 = screen.getByText(textsEn.monitorAndOptimizeProcessAndStrategy);
        const textBlock3 = screen.getByText(textsEn.throughStrategicPlanning);

        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(textBlock1).toBeInTheDocument();
        expect(textBlock2).toBeInTheDocument();
        expect(textBlock3).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        renderComponent();

        const titleMobile = screen.getByText(
            `${textsPt.welcome1}-${textsPt.welcome2}${textsPt.welcome3}`,
        );

        expect(titleMobile).toBeInTheDocument();
    });

    test('renders properly on mobile in English', () => {
        (nextRouter.useRouter as jest.Mock).mockImplementationOnce(() => ({
            query: {
                language: 'en',
            },
        }));

        setJestWindowWidth(Breakpoint.Mobile);

        renderComponent(Locale.En);

        const titleMobile = screen.getByText(
            `${textsEn.welcome1}${textsEn.welcome2}${textsEn.welcome3}`,
        );

        expect(titleMobile).toBeInTheDocument();
    });
});
