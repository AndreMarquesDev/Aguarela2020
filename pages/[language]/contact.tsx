import React from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import { staticPaths, getNavLinks } from '../../utils/getInitialProps';
import NavLinksContext from '../../components/context/NavLinksContext';

interface ContactPageProps {
    navLinksPrismicDoc: Document;
}

const ContactPage: NextPage<ContactPageProps> = props => {
    const {
        navLinksPrismicDoc,
    } = props;

    return (
        <NavLinksContext.Provider value={{
            navLinksPrismicDoc,
        }}
        >
            <Layout>
                <Head>
                    <title>Contacto - Aguarela Digital</title>
                </Head>

                <p>This is the contact page</p>
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

export default ContactPage;
