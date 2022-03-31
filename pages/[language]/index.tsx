import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import { getInitialLocale, getLangFromUrl } from 'multilingual-url/lib';
import { defaultLocale, locales } from '../../utils/locales';
import { Page } from '../../utils/pages';

const IndexPage = (): JSX.Element => {
    const router = useRouter();
    const locale = getInitialLocale(defaultLocale, locales);
    const urlHasLocale = !!getLangFromUrl(locales).length;
    const redirectToHomepage = (nextRouter: NextRouter, localeString: string): Promise<boolean> =>
        nextRouter.replace(`/${localeString}/${'homepage' as Page}`);

    useEffect(() => {
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
