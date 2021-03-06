import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NavLinksContext, { NavLinksContextProps } from '../../components/context/NavLinksContext';
import { getCurrentLanguagetexts } from '../../utils/generic';
import BrandsList from '../../components/BrandsList';
import LetsWork from '../../components/LetsWork';
import { Locale } from '../../utils/locales';
import ProjectsListDouble from '../../components/ProjectsListDouble';

const ProjectsPage: NextPage = () => {
    const {
        query,
    } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).projects;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
    const navLinksContext: NavLinksContextProps = {
        isMenuOpen,
        toggleMenu,
    };

    return (
        <NavLinksContext.Provider value={navLinksContext}>
            <Layout>
                <Head>
                    <title>
                        {translatedPageTitle}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                <ProjectsListDouble />
                <BrandsList />
                <LetsWork />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ProjectsPage;
