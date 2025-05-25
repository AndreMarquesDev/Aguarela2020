import type { NextPage } from 'next';
import type {
    NavLinksContextProps,
} from '../../src/components/context/NavLinksContext';
import type { Locale } from '../../src/types/Locale';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { BrandsList } from '../../src/components/BrandsList/BrandsList';
import {
    NavLinksContext,
} from '../../src/components/context/NavLinksContext';
import { Layout } from '../../src/components/Layout/Layout';
import { LetsWork } from '../../src/components/LetsWork/LetsWork';
import { ServicesBlock } from '../../src/components/ServicesBlock/ServicesBlock';
import { getCurrentLanguagetexts } from '../../src/utils/generic';

const ServicesPage: NextPage = () => {
    const { query } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).services;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinksContextValue = useMemo<NavLinksContextProps>(
        () => ({
            isMenuOpen,
            toggleMenu: (): void => setIsMenuOpen(!isMenuOpen),
        }),
        [isMenuOpen],
    );

    return (
        <NavLinksContext.Provider value={navLinksContextValue}>
            <Layout>
                <Head>
                    <title>
                        {translatedPageTitle}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                <ServicesBlock />
                <BrandsList />
                <LetsWork />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ServicesPage;
