import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import { staticPaths, getNavLinks } from '../../utils/routing/getInitialProps';
import NavLinksContext from '../../components/context/NavLinksContext';

interface IContactProps {
    navLinksPrismicDoc: Document;
}

const Contact: NextPage<IContactProps> = props => {
    const {
        navLinksPrismicDoc,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('contact', locale, router);
    });

    return (
        <NavLinksContext.Provider value={navLinksPrismicDoc}>
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

export default Contact;
