import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';
import { getCurrentLanguagetexts } from '../../utils/generic';
import { Locale } from '../../utils/locales';
import ContactBlock from '../../components/ContactBlock';

const ContactPage: NextPage = () => {
    const {
        query,
    } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).contact;

    return (
        <NavLinksContext.Provider value={{}}>
            <Layout>
                <Head>
                    <title>
                        {translatedPageTitle}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                <ContactBlock />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ContactPage;
