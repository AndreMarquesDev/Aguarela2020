/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode } from 'react';
import { NavLinksContext } from '../../components/context/NavLinksContext';
import { TextsContext } from '../../components/context/TextsContext';
import { Locale } from '../../types/Locale';
import { textsEn, textsPt } from '../texts';

interface MockProvidersProps {
    language?: Locale;
    isMenuOpen?: boolean;
    toggleMenu?: jest.Mock;
    setNavHeight?: jest.Mock;
    children: ReactNode;
}

export const MockProviders = ({
    language = Locale.Pt,
    isMenuOpen = false,
    toggleMenu = jest.fn(),
    setNavHeight = undefined,
    children,
}: MockProvidersProps): JSX.Element => {
    return (
        <TextsContext.Provider
            value={{
                texts: language === Locale.Pt ? textsPt : textsEn,
            }}
        >
            <NavLinksContext.Provider value={{ isMenuOpen, toggleMenu, setNavHeight }}>
                {children}
            </NavLinksContext.Provider>
        </TextsContext.Provider>
    );
};
