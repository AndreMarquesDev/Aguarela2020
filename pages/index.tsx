import { getInitialLocale } from 'multilingual-url/lib';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { defaultLocale, locales } from '../src/constants/locales';

const Index = (): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale(defaultLocale, locales);
        const isRoot = router.route === '/';

        if (isRoot) {
            router.replace('/[language]', `/${locale}`);
        }
    });

    return (
        <Head>
            <meta content="all" name="robots" />
        </Head>
    );
};

export default Index;
