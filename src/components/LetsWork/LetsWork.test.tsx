import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { textsEn, textsPt } from '../../utils/texts';
import { LetsWork } from './LetsWork';
import '@testing-library/jest-dom';

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <LetsWork />
        </MockProviders>,
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
        const { container } = renderComponent(Locale.En);

        expect(screen.getByText(textsEn.letsWork)).toBeInTheDocument();
        expect(screen.getByText(textsEn.letsWorkDescription)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contact)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
