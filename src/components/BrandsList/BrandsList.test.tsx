import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { textsEn, textsPt } from '../../utils/texts';
import { BrandsList } from './BrandsList';
import '@testing-library/jest-dom';

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <BrandsList />
        </MockProviders>,
    );
};

describe('<BrandsList />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

        expect(screen.getByText(textsEn.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
