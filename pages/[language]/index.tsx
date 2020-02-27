import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { locales } from '../../utils/locales/config';
import { localePathRegex } from '../../utils/locales/localePathRegex';
import { pagesMap } from '../../utils/pages/config';
import { pagePathRegex } from '../../utils/pages/pagePathRegex';

const Index: FC = () => {
    useEffect(() => {
        const currentLanguage = locales.filter(lang => localePathRegex(lang).test(window.location.pathname));
        const hasCorrectLocaleUrl = !!currentLanguage.length;
        const isPage = pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname));

        console.log('currentLanguage', currentLanguage);
        console.log('hasCorrectLocaleUrl', hasCorrectLocaleUrl);
        console.log('isPage', isPage);
        console.log('isPage true?', !!isPage.length);
        console.log('getInitialLocale', getInitialLocale());

        if (!hasCorrectLocaleUrl && !isPage.length) {
            console.log('Não tem língua nem é página');
        }
    });

    return (
        <Layout>
            <Head>
                <title>Aguarela Digital</title>
            </Head>

            <p>This is the homepage</p>
        </Layout>
    );
};

export default Index;
