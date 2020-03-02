import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';

const Services: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('services', locale, router);
    });

    return (
        <Layout>
            <Head>
                <title>Serviços - Aguarela Digital</title>
            </Head>

            <p>This is the services page</p>
        </Layout>
    );
};

export default Services;
