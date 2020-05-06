import React from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';
import Title from '../../components/Title';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import { capitalize } from '../../utils/generic';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/getInitialProps';

interface IProjectsPageProps {
    navLinksPrismicDoc: Document;
    projectsPagePrismicDoc: Document;
}

const ProjectsPage: NextPage<IProjectsPageProps> = props => {
    const {
        navLinksPrismicDoc,
        projectsPagePrismicDoc,
    } = props;

    const pageTitle = projectsPagePrismicDoc ? projectsPagePrismicDoc.data.page_title : 'Projetos';

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
                    projectsPagePrismicDoc ? (
                        <div className="wrapper genericMargins">
                            <Title text={RichText.asText(projectsPagePrismicDoc.data.title)} />
                            <RichText render={projectsPagePrismicDoc.data.textBody} />
                            <ul className="thumbnailList">
                                {
                                    projectsPagePrismicDoc.data.thumbnails_list.map(({ thumbnail }) => (
                                        <li key={thumbnail.alt}>
                                            <img
                                                alt={thumbnail.alt}
                                                className="thumbnails"
                                                loading="lazy"
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
    const projectsPagePrismicDoc = await getPrismicDoc(language, 'projects_page');

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            projectsPagePrismicDoc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default ProjectsPage;
