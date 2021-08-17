/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/main.scss';
import Cookies from 'js-cookie';
import { getInitialLocale } from 'multilingual-url/lib';
import { defaultLocale, locales } from '../utils/locales';
import { initializeAxiosMockAdapter } from '../ajax/axiosMockAdapter';

function MyApp({ Component, pageProps }) {
    const hasLangCookie = Cookies.get('lang');
    const locale = getInitialLocale(defaultLocale, locales);

    if (!hasLangCookie) {
        Cookies.set('lang', locale, {
            expires: 60,
        });
    }

    const hasDocument = typeof document !== 'undefined';

    if (hasDocument) {
        document.querySelector('html').lang = locale; // eslint-disable-line no-undef
    }

    if (process.env.NODE_ENV === 'development') {
        initializeAxiosMockAdapter(1000);
    }

    return <Component {...pageProps} />;
}

export default MyApp;
