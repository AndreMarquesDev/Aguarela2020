import type { RenderResult } from '@testing-library/react';
import type { FooterProps } from './Footer';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { textsEn, textsPt } from '../../utils/texts';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

const baseProps: FooterProps = {
    language: Locale.Pt,
};

const renderComponent = (
    newProps?: Partial<FooterProps>,
    language: Locale = Locale.Pt,
): RenderResult => {
    return render(
        <MockProviders language={language}>
            <Footer {...baseProps} {...newProps} />
        </MockProviders>,
    );
};

describe('<Footer />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly in English', () => {
        const { container } = renderComponent({ language: Locale.En }, Locale.En);

        expect(screen.getByText(textsEn.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
