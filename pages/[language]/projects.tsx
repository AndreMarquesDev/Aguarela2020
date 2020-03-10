import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Layout from '../../components/Layout';
import { getInitialLocale, getPrismicLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import { Client } from '../../prismic-configuration';
import NavLinksContext from '../../components/context/NavLinksContext';
import Title from '../../components/Title';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import { capitalize } from '../../utils/generic';
import { staticPaths } from '../../utils/routing/getInitialProps';

interface IProjectsProps {
    navLinksDocument: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    document: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Projects: NextPage<IProjectsProps> = props => {
    const {
        navLinksDocument,
        document,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('projects', locale, router);
    });

    const pageTitle = document ? document.data.page_title : 'Projetos';

    return (
        <NavLinksContext.Provider value={navLinksDocument}>
            <Layout>
                <Head>
                    <title>
                        {capitalize(pageTitle)}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                {
                    document ? (
                        <div>
                            <Title text={RichText.asText(document.data.title)} />
                            <RichText render={document.data.textBody} />
                            <ul className="thumbnailList">
                                {
                                    document.data.thumbnails_list.map(({ thumbnail }) => (
                                        <li key={thumbnail.alt}>
                                            <img
                                                alt={thumbnail.alt}
                                                className="thumbnails"
                                                src={thumbnail.url}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ) : <NoContentErrorBlock />
                }
            </Layout>

            <style jsx>
                {`
                    .thumbnailList {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }

                    li {
                        width: 20%;
                        height: auto;
                        margin: 10rem;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </NavLinksContext.Provider>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const prismicLocale = getPrismicLocale(context.params.language);

    const navLinksResponse = await Client.query(
        Prismic.Predicates.at('document.type', 'nav_links'),
        { lang: prismicLocale },
    );
    const projectsResponse = await Client.query(
        Prismic.Predicates.at('document.type', 'projects_page'),
        { lang: prismicLocale },
    );

    return {
        props: {
            navLinksDocument: navLinksResponse.results[0],
            document: projectsResponse.results[0],
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default Projects;
