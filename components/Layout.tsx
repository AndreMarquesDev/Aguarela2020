/* eslint-disable no-console */
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import GeneralStyles from '../styles/styles';
import Header from './Header';
import colors from '../styles/colors';
import LanguageButton from './LanguageButton';
import { bodyPadding } from '../styles/variables';

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
                        padding: ${bodyPadding} 0;

                        &:before {
                            content: '';
                            background: ${colors.lightGrey};
                            width: 50%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: -1;
                        }
                    }
                `}
            </style>

            {/* {console.log('%c| 🔧 Developed by AndreMarquesDev ✏️ Designed by Aguarela Digital |', 'background: #000; color: #fff;')}
            {console.log('%c| https://github.com/AndreMarquesDev |', 'background: #000; color: #fff;')}
            {console.log('%c| https://www.instagram.com/aguareladigital |', 'background: #000; color: #fff;')} */}
        </main>
    );
};

export default Layout;
