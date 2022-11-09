import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Footer, FooterProps } from './Footer';
import { textsEn, textsPt } from '../../utils/texts';
import { MockProviders } from '../../utils/jest/MockProviders';
import { Locale } from '../../utils/locales';

const baseProps: FooterProps = {
    language: 'pt',
};

const renderComponent = (
    newProps?: Partial<FooterProps>,
    language: Locale = 'pt'
): RenderResult => {
    return render(
        <MockProviders language={language}>
            <Footer {...baseProps} {...newProps} />
        </MockProviders>
    );
};

describe('<Footer />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent({ language: 'en' }, 'en');

        expect(screen.getByText(textsEn.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
