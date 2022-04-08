import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import * as nextRouter from 'next/router';
import { WelcomeBlock } from './WelcomeBlock';
import { textsPt, textsEn } from '../../utils/texts';
import { TextsContext } from '../context/TextsContext';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { Breakpoint } from '../../utils/useWindowSize';
import { textBlock1DataTestId } from '../../utils/dataTestIds';

// @ts-ignore
nextRouter.useRouter = jest.fn(() => ({
    query: {
        language: 'pt',
    },
}));

const renderComponent = (): RenderResult => {
    return render(<WelcomeBlock />);
};

describe('<WelcomeBlock />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const title1 = screen.getByText(textsPt.welcome1);
        const title2 = screen.getByText(textsPt.welcome2);
        const title3 = screen.getByText(textsPt.welcome3);
        const textBlock2 = screen.getByText(textsPt.monitorAndOptimizeProcessAndStrategy);
        const textBlock3 = screen.getByText(textsPt.throughStrategicPlanning);

        const textBlock1 = screen.getByTestId(textBlock1DataTestId);
        const actualTextBlock1Text =
            'Gestão de redes sociais está no meu ADN. Sou uma freelancer, baseada em Lisboa, com experiência em gestão de redes sociais e criação de conteúdo. A @Aguarela surgiu com o objetivo de ajudar negócios locais e pequenas empresas a posicionarem-se no digital, gerar awareness, criar uma relação com o target e impulsionar vendas';

        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(textBlock2).toBeInTheDocument();
        expect(textBlock3).toBeInTheDocument();

        expect(textBlock1).toHaveTextContent(actualTextBlock1Text);

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <WelcomeBlock />
            </TextsContext.Provider>
        );

        const title1 = screen.getByText(textsEn.welcome1);
        const title2 = screen.getByText(textsEn.welcome2);
        const title3 = screen.getByText(textsEn.welcome3);
        const textBlock2 = screen.getByText(textsEn.monitorAndOptimizeProcessAndStrategy);
        const textBlock3 = screen.getByText(textsEn.throughStrategicPlanning);

        const textBlock1 = screen.getByTestId(textBlock1DataTestId);
        const actualTextBlock1Text =
            "Social media management is in my DNA. I'm a freelancer, based in Lisbon, with experience in social media management and content creation. @Aguarela's goal is to help local businesses and small companies position themselves digitally, create awareness, create a realtionship with the target and boost sales";

        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(textBlock2).toBeInTheDocument();
        expect(textBlock3).toBeInTheDocument();

        expect(textBlock1).toHaveTextContent(actualTextBlock1Text);

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        renderComponent();

        const titleMobile = screen.getByText(
            `${textsPt.welcome1}-${textsPt.welcome2}${textsPt.welcome3}`
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

        render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <WelcomeBlock />
            </TextsContext.Provider>
        );

        const titleMobile = screen.getByText(
            `${textsEn.welcome1}${textsEn.welcome2}${textsEn.welcome3}`
        );

        expect(titleMobile).toBeInTheDocument();
    });
});
