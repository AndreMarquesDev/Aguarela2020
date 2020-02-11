import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const contact: FC = () => (
    <Layout>
        <Head>
            <title>Contacto - Aguarela Digital</title>
        </Head>

        <p className="noScroll">This is the contact page</p>
    </Layout>
);

export default contact;
