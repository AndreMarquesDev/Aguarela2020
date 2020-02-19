import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getInitialLocale } from '../utils/getLanguage';

const Index: FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/[lang]', `/${getInitialLocale()}`);
    });

    console.log('Index');

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
