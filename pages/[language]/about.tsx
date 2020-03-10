import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import Title from '../../components/Title';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import { capitalize } from '../../utils/generic';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/routing/getInitialProps';

interface IAboutProps {
    navLinksPrismicDoc: Document;
    aboutPrismicDoc: Document;
}

const About: NextPage<IAboutProps> = props => {
    const {
        navLinksPrismicDoc,
        aboutPrismicDoc,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('about', locale, router);
    });

    const pageTitle = aboutPrismicDoc ? aboutPrismicDoc.data.page_title : 'Sobre';

    return (
        <NavLinksContext.Provider value={navLinksPrismicDoc}>
            <Layout>
                <Head>
                    <title>
                        {capitalize(pageTitle)}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                {
                    aboutPrismicDoc ? (
                        <div>
                            <Title text={RichText.asText(aboutPrismicDoc.data.title)} />
                            <RichText render={aboutPrismicDoc.data.textBody} />
                        </div>
                    ) : <NoContentErrorBlock />
                }
            </Layout>
        </NavLinksContext.Provider>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const { language } = context.params;

    const navLinks = await getNavLinks(language);
    const aboutPrismicDoc = await getPrismicDoc(language, 'about');

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            aboutPrismicDoc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default About;
