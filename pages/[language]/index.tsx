import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { urlHasLocale } from '../../utils/routing/urlValidation';

const Index: FC = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        if (!urlHasLocale) {
            router.replace(`/${locale}/${router.query.language}`);

            return;
        }

        router.replace(`/${locale}/home`);
    });

    return (
        <Head>
            <meta content="noindex, nofollow" name="robots" />
        </Head>
    );
};

export default Index;
