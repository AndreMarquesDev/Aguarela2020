import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { BrandsList } from './BrandsList';
import { textsEn, textsPt } from '../../utils/texts';
import { MockProviders } from '../../utils/jest/MockProviders';
import { Locale } from '../../utils/locales';

const renderComponent = (language: Locale = 'pt'): RenderResult => {
    return render(
        <MockProviders language={language}>
            <BrandsList />
        </MockProviders>
    );
};

describe('<BrandsList />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent('en');

        expect(screen.getByText(textsEn.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
