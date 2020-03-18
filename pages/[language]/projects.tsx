import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import Title from '../../components/Title';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import { capitalize } from '../../utils/generic';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/routing/getInitialProps';

interface IProjectsProps {
    navLinksPrismicDoc: Document;
    projectsPrismicDoc: Document;
}

const Projects: NextPage<IProjectsProps> = props => {
    const {
        navLinksPrismicDoc,
        projectsPrismicDoc,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('projects', locale, router);
    });

    const pageTitle = projectsPrismicDoc ? projectsPrismicDoc.data.page_title : 'Projetos';

    return (
        <NavLinksContext.Provider value={{ navLinksPrismicDoc }}>
            <Layout>
                <Head>
                    <title>
                        {capitalize(pageTitle)}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                {
                    projectsPrismicDoc ? (
                        <div className="wrapper genericMargins">
                            <Title text={RichText.asText(projectsPrismicDoc.data.title)} />
                            <RichText render={projectsPrismicDoc.data.textBody} />
                            <ul className="thumbnailList">
                                {
                                    projectsPrismicDoc.data.thumbnails_list.map(({ thumbnail }) => (
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
    const { language } = context.params;

    const navLinks = await getNavLinks(language);
    const projectsPrismicDoc = await getPrismicDoc(language, 'projects_page');

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            projectsPrismicDoc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default Projects;
