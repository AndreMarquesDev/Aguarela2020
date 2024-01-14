/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import React from 'react';
import Cookies from 'js-cookie';
import { getInitialLocale } from 'multilingual-url/lib';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { defaultLocale, locales } from '../src/constants/locales';
import '../src/styles/main.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const hasLangCookie = Cookies.get('lang');
    const locale = getInitialLocale(defaultLocale, locales);
    const hasDocument = typeof document !== 'undefined';
    const htmlElement = hasDocument ? document.querySelector('html') : null;

    if (!hasLangCookie) {
        Cookies.set('lang', locale, {
            expires: 60,
        });
    }

    if (hasDocument && htmlElement) {
        htmlElement.lang = locale; // eslint-disable-line no-undef
    }

    return (
        <>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default MyApp;
