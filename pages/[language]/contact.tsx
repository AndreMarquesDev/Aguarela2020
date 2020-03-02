import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';

const Contact: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('contact', locale, router);
    });

    return (
        <Layout>
            <Head>
                <title>Contacto - Aguarela Digital</title>
            </Head>

            <p>This is the contact page</p>
        </Layout>
    );
};

export default Contact;
