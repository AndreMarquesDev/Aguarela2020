import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { locales } from '../../utils/locales/config';

const Index: FC = () => {
    useEffect(() => {
        const currentLanguage = locales.filter(lang => window.location.pathname.includes(`/${lang}`));

        console.log('currentLanguage', currentLanguage);
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
