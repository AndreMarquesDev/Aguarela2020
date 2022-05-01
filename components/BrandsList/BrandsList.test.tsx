import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { BrandsList } from './BrandsList';
import { textsEn, textsPt } from '../../utils/texts';
import { MockTextsContext } from '../../utils/jest/MockTextsContext';

const renderComponent = (isEnglish = false): RenderResult => {
    return render(
        <MockTextsContext isEnglish={isEnglish}>
            <BrandsList />
        </MockTextsContext>
    );
};

describe('<BrandsList />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent(true);

        expect(screen.getByText(textsEn.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
