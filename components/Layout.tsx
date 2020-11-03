/* eslint-disable no-console */
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import LanguageButton from './LanguageButton';
import TextsContext from './context/TextsContext';
import { textsEn, textsPt } from '../utils/texts';

const Layout: FC = props => {
    const { children } = props;

    const {
        route,
        query,
    } = useRouter();

    const currentLanguage = query.language?.toString();
    const texts = currentLanguage === 'pt' ? textsPt : textsEn;

    return (
        <TextsContext.Provider value={{
            texts,
        }}
        >
            <main className="Layout">
                <Header currentRoute={route} language={currentLanguage} />

                {children}

                <LanguageButton language={currentLanguage} />

                <p>{texts.about}</p>
                <p>{texts.projects}</p>
                <p>{texts.services}</p>
                <p>{texts.contact}</p>

                <style jsx>
                    {`
                    .Layout {
                        position: relative;
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
