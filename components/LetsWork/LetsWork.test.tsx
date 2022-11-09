import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { LetsWork } from './LetsWork';
import { textsEn, textsPt } from '../../utils/texts';
import { MockProviders } from '../../utils/jest/MockProviders';
import { Locale } from '../../utils/locales';

const renderComponent = (language: Locale = 'pt'): RenderResult => {
    return render(
        <MockProviders language={language}>
            <LetsWork />
        </MockProviders>
    );
};

describe('<LetsWork />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.letsWork)).toBeInTheDocument();
        expect(screen.getByText(textsPt.letsWorkDescription)).toBeInTheDocument();
        expect(screen.getByText(textsPt.contact)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent('en');

        expect(screen.getByText(textsEn.letsWork)).toBeInTheDocument();
        expect(screen.getByText(textsEn.letsWorkDescription)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contact)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
