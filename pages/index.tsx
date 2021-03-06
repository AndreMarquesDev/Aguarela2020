import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from 'multilingual-url/lib';
import { defaultLocale, locales } from '../utils/locales';

const Index: FC = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale(defaultLocale, locales);
        const isRoot = router.route === '/';

        if (isRoot) {
            router.replace('/[lang]', `/${locale}`);
        }
    });

    return (
        <Head>
            <meta content="noindex, nofollow" name="robots" />
        </Head>
    );
};

export default Index;
