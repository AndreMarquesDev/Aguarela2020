import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { BrandsList } from './BrandsList';
import { TextsContext } from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';

const renderComponent = (): RenderResult => {
    return render(<BrandsList />);
};

describe('<BrandsList />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <BrandsList />
            </TextsContext.Provider>
        );

        expect(screen.getByText(textsEn.myNetwork)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
