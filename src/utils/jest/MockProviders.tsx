/* eslint-disable unicorn/filename-case */
import type { ReactNode } from 'react';
import React from 'react';
import { NavLinksContext } from '../../components/context/NavLinksContext';
import { TextsContext } from '../../components/context/TextsContext';
import { Locale } from '../../types/Locale';
import { textsEn, textsPt } from '../texts';

type MockProvidersProps = {
    language?: Locale;
    isMenuOpen?: boolean;
    toggleMenu?: jest.Mock;
    setNavHeight?: jest.Mock;
    children: ReactNode;
};

export const MockProviders = ({
    language = Locale.Pt,
    isMenuOpen = false,
    // eslint-disable-next-line react/no-unstable-default-props
    toggleMenu = jest.fn(),
    setNavHeight = undefined,
    children,
}: MockProvidersProps): JSX.Element => {
    return (
        <TextsContext.Provider
            // eslint-disable-next-line react/no-unstable-context-value
            value={{
                texts: language === Locale.Pt ? textsPt : textsEn,
            }}
        >
            {/* eslint-disable-next-line react/no-unstable-context-value */}
            <NavLinksContext.Provider value={{ isMenuOpen, toggleMenu, setNavHeight }}>
                {children}
            </NavLinksContext.Provider>
        </TextsContext.Provider>
    );
};
