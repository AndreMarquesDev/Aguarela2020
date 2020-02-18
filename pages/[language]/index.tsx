import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

const Index: FC = () => (
    <Layout>
        <Head>
            <title>Aguarela Digital</title>
        </Head>

        <p>This is the homepage</p>
    </Layout>
);

export default Index;
