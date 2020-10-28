/* eslint-disable no-console */
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import GeneralStyles from '../styles/styles';
import Header from './Header';
import LanguageButton from './LanguageButton';

const Layout: FC = props => {
    const { children } = props;

    const {
        route,
        query,
    } = useRouter();

    return (
        <main className="Layout">
            <GeneralStyles />

            <Header currentRoute={route} language={query.language?.toString()} />

            {children}

            <LanguageButton language={query.language?.toString()} />

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
    );
};

export default Layout;
