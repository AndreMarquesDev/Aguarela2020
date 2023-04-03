import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../src/components/Layout/Layout';
import { getCurrentLanguagetexts } from '../../src/utils/generic';
import {
    NavLinksContext,
    NavLinksContextProps,
} from '../../src/components/context/NavLinksContext';
import { BrandsList } from '../../src/components/BrandsList/BrandsList';
import { LetsWork } from '../../src/components/LetsWork/LetsWork';
import { AboutMe } from '../../src/components/AboutMe/AboutMe';
import { Locale } from '../../src/types/Locale';

const AboutPage: NextPage = () => {
    const { query } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).about;

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

                <AboutMe />
                <BrandsList />
                <LetsWork />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default AboutPage;
