import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import { getInitialLocale } from 'multilingual-url/lib';
import Layout from '../../components/Layout';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks } from '../../utils/routing/getInitialProps';
import { Page } from '../../utils/pages';

interface IServicesPageProps {
    navLinksPrismicDoc: Document;
}

const ServicesPage: NextPage<IServicesPageProps> = props => {
    const {
        navLinksPrismicDoc,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('services' as Page, locale, router);
    });

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
