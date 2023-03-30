/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/main.scss';
import Cookies from 'js-cookie';
import { getInitialLocale } from 'multilingual-url/lib';
// TODO - review LogRocket usage
// import LogRocket from 'logrocket';
import { defaultLocale, locales } from '../constants/locales';

function MyApp({ Component, pageProps }) {
    const hasLangCookie = Cookies.get('lang');
    const locale = getInitialLocale(defaultLocale, locales);
    const hasDocument = typeof document !== 'undefined';
    // TODO - review LogRocket usage
    // const isProd = process.env.NODE_ENV === 'production';

    if (!hasLangCookie) {
        Cookies.set('lang', locale, {
            expires: 60,
        });
    }

    if (hasDocument) {
        document.querySelector('html').lang = locale; // eslint-disable-line no-undef
    }

    // TODO - review LogRocket usage
    // if (isProd) {
    //     LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APPID);
    //     LogRocket.identify();
    // }

    return <Component {...pageProps} />;
}

export default MyApp;
