import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import TextShadowBlock, {
    buttonText,
    mailtoValue,
    textBlock1DataTestId,
    TextShadowBlockProps,
} from './TextShadowBlock';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';

const baseProps: TextShadowBlockProps = {
    title1: 'Bem',
    title2: 'Vin',
    title3: 'Dos',
    titleMobile: 'Bem-VinDos',
    textBlock1:
        'Gestão de redes sociais está no meu ADN. Sou uma freelancer, baseada em Lisboa, com experiência em gestão de redes sociais e criação de conteúdo. A <a href="https://www.instagram.com/aguareladigital" target="_blank" rel="noreferrer" class="link">@Aguarela</a> surgiu com o objetivo de ajudar negócios locais e pequenas empresas a posicionarem-se no digital, gerar awareness, criar uma relação com o target e impulsionar vendas.',
    textBlock2:
        'Do ínicio ao fim, acompanho, monitorizo e otimizo todo o processo e estratégia de gestão de redes sociais.',
    textBlock3:
        'Através do planeamento estratégico, criação de conteúdo e implementação estou disponível para ser o vosso braço direito.',
    hasButton: false,
};

const renderComponent = (newProps?: Partial<TextShadowBlockProps>): RenderResult => {
    return render(<TextShadowBlock {...baseProps} {...newProps} />);
};

describe('<TextShadowBlock />', () => {
    test('renders properly', () => {
        renderComponent();

        const title1 = screen.getByText(baseProps.title1);
        const title2 = screen.getByText(baseProps.title2);
        const title3 = screen.getByText(baseProps.title3);
        const textBlock2 = screen.getByText(baseProps.textBlock2);
        const textBlock3 = screen.getByText(baseProps.textBlock3);

        const textBlock1 = screen.getByTestId(textBlock1DataTestId);
        const actualTextBlock1Text =
            'Gestão de redes sociais está no meu ADN. Sou uma freelancer, baseada em Lisboa, com experiência em gestão de redes sociais e criação de conteúdo. A @Aguarela surgiu com o objetivo de ajudar negócios locais e pequenas empresas a posicionarem-se no digital, gerar awareness, criar uma relação com o target e impulsionar vendas';

        const titleMobile = screen.queryByText(baseProps.titleMobile);

        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(textBlock2).toBeInTheDocument();
        expect(textBlock3).toBeInTheDocument();

        expect(textBlock1).toHaveTextContent(actualTextBlock1Text);

        expect(titleMobile).not.toBeInTheDocument();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(true);

        renderComponent();

        const titleMobile = screen.getByText(baseProps.titleMobile);

        const title1 = screen.queryByText(baseProps.title1);
        const title2 = screen.queryByText(baseProps.title2);
        const title3 = screen.queryByText(baseProps.title3);

        expect(titleMobile).toBeInTheDocument();

        expect(title1).not.toBeInTheDocument();
        expect(title2).not.toBeInTheDocument();
        expect(title3).not.toBeInTheDocument();
    });

    test('renders properly with a button', () => {
        setJestWindowWidth();

        const { container } = renderComponent({
            hasButton: true,
        });

        const buttonContent = screen.getByText(buttonText);

        expect(buttonContent).toBeInTheDocument();
        expect(buttonContent).toHaveAttribute('href', mailtoValue);

        expect(container).toMatchSnapshot();
    });
});
