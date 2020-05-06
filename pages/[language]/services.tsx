import React from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks } from '../../utils/getInitialProps';

interface IServicesPageProps {
    navLinksPrismicDoc: Document;
}

const ServicesPage: NextPage<IServicesPageProps> = props => {
    const {
        navLinksPrismicDoc,
    } = props;

    return (
        <NavLinksContext.Provider value={{ navLinksPrismicDoc }}>
            <Layout>
                <Head>
                    <title>Serviços - Aguarela Digital</title>
                </Head>

                <p>This is the services page</p>
            </Layout>
        </NavLinksContext.Provider>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const navLinks = await getNavLinks(context.params.language);

    return {
        props: {
            navLinksPrismicDoc: navLinks,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default ServicesPage;
