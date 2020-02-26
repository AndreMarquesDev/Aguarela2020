import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../utils/locales/getLocale';

const Index: FC = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();
        const isRoot = router.route === '/';

        if (isRoot) {
            router.replace('/[lang]', `/${locale}`);
        }

        const hasQuery = !!router.query.language;
        const hasLangParam = hasQuery && (router.query.language === 'en' || router.query.language === 'pt');

        // if user navigates to "/about", replace with "/en/about"
        if (!isRoot && hasQuery && !hasLangParam) {
            router.replace(`/${locale}/${router.query.language}`);
        }
    });


    return (
        <Head>
            <meta content="noindex, nofollow" name="robots" />
        </Head>
    );
};

export default Index;
