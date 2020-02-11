/* eslint-disable no-console */
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import GeneralStyles from '../styles/styles';
import Header from './Header';
import colors from '../styles/colors';

const Layout: FC = props => {
    const { children } = props;

    const router = useRouter();

    return (
        <main className="Layout">
            <Head>
                <link
                    href="/static/images/logo.png"
                    rel="shortcut icon"
                    type="image/x-icon"
                />
            </Head>
            <GeneralStyles />

            <Header currentRoute={router.route} />

            {children}

            <style jsx>
                {`
                    .Layout {
                        padding: 20px;
                    }

                    .Layout:before {
                        content: '';
                        background: ${colors.lightGrey};
                        width: 50%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: -1;
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
