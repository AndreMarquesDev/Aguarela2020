import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout/Layout';
import { NavLinksContext, NavLinksContextProps } from '../../components/context/NavLinksContext';
import { getCurrentLanguagetexts } from '../../utils/generic';
import { BrandsList } from '../../components/BrandsList/BrandsList';
import { LetsWork } from '../../components/LetsWork/LetsWork';
import { Locale } from '../../utils/locales';
import { ServicesBlock } from '../../components/ServicesBlock/ServicesBlock';

const ServicesPage: NextPage = () => {
    const { query } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).services;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinksContextValue = useMemo<NavLinksContextProps>(
        () => ({
            isMenuOpen,
            toggleMenu: () => setIsMenuOpen(!isMenuOpen),
        }),
        [isMenuOpen]
    );

    return (
        <NavLinksContext.Provider value={navLinksContextValue}>
            <Layout>
                <Head>
                    <title>{translatedPageTitle} - Aguarela Digital</title>
                </Head>

                <ServicesBlock />
                <BrandsList />
                <LetsWork />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ServicesPage;
