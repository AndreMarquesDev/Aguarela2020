import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';

const Index: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('home', locale, router);
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
