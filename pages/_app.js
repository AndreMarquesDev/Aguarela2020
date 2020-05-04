/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Cookies from 'js-cookie';
import { getInitialLocale } from 'multilingual-url/lib';
import { hasDocument } from '../utils/routing/config';

function MyApp({ Component, pageProps }) {
    const hasLangCookie = Cookies.get('lang');
    const locale = getInitialLocale();

    if (!hasLangCookie) {
        Cookies.set('lang', locale, { expires: 60 });
    }

    if (hasDocument) {
        document.querySelector('html').lang = locale; // eslint-disable-line no-undef
    }

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
