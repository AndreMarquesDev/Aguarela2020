import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter, NextRouter } from 'next/router';
import { getInitialLocale, getLangFromUrl } from 'multilingual-url/lib';
import { defaultLocale, locales } from '../../src/constants/locales';
import { Page } from '../../src/utils/pages';

const IndexPage = (): JSX.Element => {
    const [hasRunRouterReplace, setHasRunRouterReplace] = useState(false);
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

        // https://stackoverflow.com/a/73344411/7643841
        if (!hasRunRouterReplace) {
            redirectToHomepage(router, locale);
            setHasRunRouterReplace(true);
        }
    }, [urlHasLocale, locale, router, hasRunRouterReplace]);

    return (
        <Head>
            <meta content="all" name="robots" />
        </Head>
    );
};

export default IndexPage;
