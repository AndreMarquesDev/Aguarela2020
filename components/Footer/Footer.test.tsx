import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer, { FooterProps } from './Footer';
import TextsContext from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';

const baseProps: FooterProps = {
    language: 'pt',
};

describe('<Footer />', () => {
    test('renders properly', () => {
        const { container } = render(<Footer {...baseProps} />);

        expect(screen.getByText(textsPt.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <Footer language="en" />
            </TextsContext.Provider>
        );

        expect(screen.getByText(textsEn.footerInfo)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
