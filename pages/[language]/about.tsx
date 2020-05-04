import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { Document } from 'prismic-javascript/d.ts/documents';
import { getInitialLocale } from 'multilingual-url/lib';
import Layout from '../../components/Layout';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import Title from '../../components/Title';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import { capitalize } from '../../utils/generic';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/routing/getInitialProps';
import { Page } from '../../utils/pages';

interface IAboutPageProps {
    navLinksPrismicDoc: Document;
    aboutPagePrismicDoc: Document;
}

const AboutPage: NextPage<IAboutPageProps> = props => {
    const {
        navLinksPrismicDoc,
        aboutPagePrismicDoc,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('about' as Page, locale, router);
    });

    const pageTitle = aboutPagePrismicDoc ? aboutPagePrismicDoc.data.page_title : 'Sobre';

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
                    aboutPagePrismicDoc ? (
                        <div className="wrapper genericMargins">
                            <Title text={RichText.asText(aboutPagePrismicDoc.data.title)} />
                            <RichText render={aboutPagePrismicDoc.data.textBody} />
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
    const aboutPagePrismicDoc = await getPrismicDoc(language, 'about');

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            aboutPagePrismicDoc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default AboutPage;
