/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode } from 'react';
import { NavLinksContext } from '../../components/context/NavLinksContext';
import { TextsContext } from '../../components/context/TextsContext';
import { Locale } from '../locales';
import { textsEn, textsPt } from '../texts';

interface MockProvidersProps {
    language?: Locale;
    isMenuOpen?: boolean;
    toggleMenu?: jest.Mock;
    setNavHeight?: jest.Mock;
    children: ReactNode;
}

export const MockProviders = ({
    language = 'pt',
    isMenuOpen = false,
    toggleMenu = jest.fn(),
    setNavHeight = undefined,
    children,
}: MockProvidersProps): JSX.Element => {
    return (
        <TextsContext.Provider
            value={{
                texts: language === 'pt' ? textsPt : textsEn,
            }}
        >
            <NavLinksContext.Provider value={{ isMenuOpen, toggleMenu, setNavHeight }}>
                {children}
            </NavLinksContext.Provider>
        </TextsContext.Provider>
    );
};
