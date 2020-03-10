import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Prismic from 'prismic-javascript';
import Layout from '../../components/Layout';
import { getInitialLocale, getPrismicLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import { Client } from '../../prismic-configuration';
import NavLinksContext from '../../components/context/NavLinksContext';
import { staticPaths } from '../../utils/routing/getInitialProps';

interface IContactProps {
    navLinksDocument: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Contact: NextPage<IContactProps> = props => {
    const {
        navLinksDocument,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('contact', locale, router);
    });

    return (
        <NavLinksContext.Provider value={navLinksDocument}>
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
    const prismicLocale = getPrismicLocale(context.params.language);

    const navLinksResponse = await Client.query(
        Prismic.Predicates.at('document.type', 'nav_links'),
        { lang: prismicLocale },
    );

    return {
        props: {
            navLinksDocument: navLinksResponse.results[0],
        },
    };
};


export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default Contact;
