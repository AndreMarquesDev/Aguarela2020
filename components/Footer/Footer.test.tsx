import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Footer, FooterProps } from './Footer';
import { textsEn, textsPt } from '../../utils/texts';
import { MockTextsContext } from '../../utils/jest/MockTextsContext';

const baseProps: FooterProps = {
    language: 'pt',
};

const renderComponent = (newProps?: Partial<FooterProps>, isEnglish = false): RenderResult => {
    return render(
        <MockTextsContext isEnglish={isEnglish}>
            <Footer {...baseProps} {...newProps} />
        </MockTextsContext>
    );
};

describe('<Footer />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent({ language: 'en' }, true);

        expect(screen.getByText(textsEn.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
