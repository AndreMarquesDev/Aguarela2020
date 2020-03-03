import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Prismic from 'prismic-javascript';
import Layout from '../../components/Layout';
import { getInitialLocale, getPrismicLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import { Client } from '../../prismic-configuration';
import NavLinksContext from '../../components/context/NavLinksContext';

interface IProjectsProps {
    navLinksDocument: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Projects: NextPage<IProjectsProps> = props => {
    const {
        navLinksDocument,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('projects', locale, router);
    });

    return (
        <NavLinksContext.Provider value={navLinksDocument}>
            <Layout>
                <Head>
                    <title>Projetos - Aguarela Digital</title>
                </Head>

                <p>This is the projects page</p>
            </Layout>
        </NavLinksContext.Provider>
    );
};

Projects.getInitialProps = async (context): Promise<IProjectsProps> => {
    const prismicLocale = getPrismicLocale(context.query.language);

    const { req: request } = context; // eslint-disable-line id-length

    const navLinksResponse = await Client(request).query(
        Prismic.Predicates.at('document.type', 'nav_links'),
        { lang: prismicLocale },
    );

    return {
        navLinksDocument: navLinksResponse.results[0],
    };
};

export default Projects;
