import React, { ReactNode, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Header } from '../Header/Header';
import { TextsContext, TextsContextProps } from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';
import { Footer } from '../Footer/Footer';
import { Locale } from '../../utils/locales';
import { NavLinksContext } from '../context/NavLinksContext';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';

export interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    const { route, query } = useRouter();
    const { isMenuOpen } = useContext(NavLinksContext);

    const currentLanguage = query.language?.toString() as Locale;
    const texts = currentLanguage === 'pt' ? textsPt : textsEn;

    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Tablet;

    const textsContextValue = useMemo<TextsContextProps>(
        () => ({
            texts,
        }),
        [texts]
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
                    }
                `}
            </style>
        </>
    );
};
