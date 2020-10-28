import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';

const ServicesPage: NextPage<any> = () => (
    <NavLinksContext.Provider value={{}}>
        <Layout>
            <Head>
                <title>Serviços - Aguarela Digital</title>
            </Head>

            <p>This is the services page</p>
        </Layout>
    </NavLinksContext.Provider>
);

export default ServicesPage;
