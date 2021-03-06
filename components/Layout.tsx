/* eslint-disable no-console */
import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Header from './Header';
import TextsContext from './context/TextsContext';
import { textsEn, textsPt } from '../utils/texts';
import Footer from './Footer';
import { Locale } from '../utils/locales';
import NavLinksContext from './context/NavLinksContext';
import { useWindowSize, tabletBreakpoint } from '../utils/useWindowSize';

const Layout: FC = props => {
    const { children } = props;

    const {
        route,
        query,
    } = useRouter();
    const { isMenuOpen } = useContext(NavLinksContext);

    const currentLanguage = query.language?.toString() as Locale;
    const texts = currentLanguage === 'pt' ? textsPt : textsEn;

    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > tabletBreakpoint;

    return (
        <TextsContext.Provider value={{
            texts,
        }}
        >
            <main className={classNames('layout', isMenuOpen && !isDesktop && 'menuOpen')}>
                <Header currentRoute={route} language={currentLanguage} />

                {children}

                <Footer language={currentLanguage} />

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

                {/* {console.log('%c| 🔧 Developed by AndreMarquesDev ✏️ Designed by Aguarela Digital |', 'background: #000; color: #fff;')}
                {console.log('%c| https://andremarquesdev.com |', 'background: #000; color: #fff;')}
                {console.log('%c| https://www.instagram.com/aguareladigital |', 'background: #000; color: #fff;')} */}
            </main>
        </TextsContext.Provider>
    );
};

export default Layout;
