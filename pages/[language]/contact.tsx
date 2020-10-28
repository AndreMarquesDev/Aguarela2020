import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';

const ContactPage: NextPage<any> = () => (
    <NavLinksContext.Provider value={{}}>
        <Layout>
            <Head>
                <title>Contacto - Aguarela Digital</title>
            </Head>

            <p>This is the contact page</p>
        </Layout>
    </NavLinksContext.Provider>
);

export default ContactPage;
