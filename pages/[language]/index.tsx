import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale, urlHasLocale } from 'multilingual-url/lib';
import { redirectToHomepage } from '../../utils/routing/config';

const IndexPage: FC = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

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
