/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/main.scss';
import Cookies from 'js-cookie';
import { getInitialLocale } from 'multilingual-url/lib';
// TODO - review LogRocket usage
// import LogRocket from 'logrocket';
import { defaultLocale, locales } from '../constants/locales';
import { initializeAxiosMockAdapter } from '../ajax/axiosMockAdapter';

function MyApp({ Component, pageProps }) {
    const hasLangCookie = Cookies.get('lang');
    const locale = getInitialLocale(defaultLocale, locales);
    const hasDocument = typeof document !== 'undefined';
    // TODO - review LogRocket usage
    // const isCypress = typeof window !== 'undefined' && window.Cypress;
    // const isProd = process.env.NODE_ENV === 'production';
    const isDev = process.env.NODE_ENV === 'development';

    if (!hasLangCookie) {
        Cookies.set('lang', locale, {
            expires: 60,
        });
    }

    if (hasDocument) {
        document.querySelector('html').lang = locale; // eslint-disable-line no-undef
    }

    // TODO - review LogRocket usage
    // if (isProd && !isCypress) {
    //     LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APPID);
    //     LogRocket.identify();
    // }

    if (isDev) {
        initializeAxiosMockAdapter(1000);
    }

    return <Component {...pageProps} />;
}

export default MyApp;
