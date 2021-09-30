import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import LetsWork from './LetsWork';
import TextsContext from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';

describe('<LetsWork />', () => {
    test('renders properly', () => {
        const { container } = render(<LetsWork />);

        expect(screen.getByText(textsPt.letsWork)).toBeInTheDocument();
        expect(screen.getByText(textsPt.letsWorkDescription)).toBeInTheDocument();
        expect(screen.getByText(textsPt.contact)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <LetsWork />
            </TextsContext.Provider>
        );

        expect(screen.getByText(textsEn.letsWork)).toBeInTheDocument();
        expect(screen.getByText(textsEn.letsWorkDescription)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contact)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});