import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale, getLangFromUrl } from 'multilingual-url/lib';
import { redirectToHomepage } from '../../utils/routing/config';
import { defaultLocale, locales } from '../../utils/locales';

const IndexPage: FC = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale(defaultLocale, locales);
        const urlHasLocale = !!getLangFromUrl(locales).length;

        if (!urlHasLocale) {
            router.replace(`/${locale}/${router.query.language}`);

            return;
        }

        redirectToHomepage(router, locale);
    });

    return (
        <Head>
            <meta content="noindex, nofollow" name="robots" />
        </Head>
    );
};

export default IndexPage;
