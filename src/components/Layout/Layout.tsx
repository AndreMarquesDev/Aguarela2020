import type { ReactNode } from 'react';
import type { TextsContextProps } from '../context/TextsContext';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react';
import { Locale } from '../../types/Locale';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint, useWindowSize } from '../../utils/useWindowSize';
import { NavLinksContext } from '../context/NavLinksContext';
import { TextsContext } from '../context/TextsContext';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    const { route, query } = useRouter();
    const { isMenuOpen } = useContext(NavLinksContext);

    const currentLanguage = query.language?.toString() as Locale;
    const texts = currentLanguage === Locale.Pt ? textsPt : textsEn;

    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Tablet;

    const textsContextValue = useMemo<TextsContextProps>(
        () => ({
            texts,
        }),
        [texts],
    );

    return (
        <>
            <TextsContext.Provider value={textsContextValue}>
                <main className={classNames('layout', isMenuOpen && !isDesktop && 'menuOpen')}>
                    <Header currentRoute={route} language={currentLanguage} />

                    {children}

                    <Footer language={currentLanguage} />
                </main>
            </TextsContext.Provider>

            <style jsx>
                {`
                    .layout {
                        position: relative;
                    }

                    .menuOpen {
                        position: fixed;
                        overflow: hidden;
                        width: 100%;
                    }
                `}
            </style>
        </>
    );
};
