import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';
import { getCurrentLanguagetexts } from '../../utils/generic';
import BrandsList from '../../components/BrandsList';
import LetsWork from '../../components/LetsWork';
import { Locale } from '../../utils/locales';

const ServicesPage: NextPage = () => {
    const {
        query,
    } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).services;

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

                <BrandsList />
                <LetsWork />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ServicesPage;
