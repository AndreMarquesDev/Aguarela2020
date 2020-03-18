/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext, { INavLinksContext } from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/routing/getInitialProps';
import WelcomeSection from '../../components/WelcomeSection';
import Highlights from '../../components/Highlights';
import Separator from '../../components/Separator';

interface IHomeProps {
    navLinksPrismicDoc: Document;
    homePrismicDoc: Document;
}

const Home: NextPage<IHomeProps> = props => {
    const {
        navLinksPrismicDoc,
        homePrismicDoc,
    } = props;

    const router = useRouter();
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('home', locale, router);
    });

    const context: INavLinksContext = {
        navLinksPrismicDoc,
        setNavHeight,
    };

    const {
        welcome_body_text,
        welcome_title,
        highlights_thumbnails,
        highlights_title,
    } = homePrismicDoc.data;

    return (
        <NavLinksContext.Provider value={context}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <img alt="" src="https://via.placeholder.com/2560x1290/5865A2/FFFFFF?text=Banner" />

                {
                    homePrismicDoc && (
                        <>
                            <WelcomeSection
                                bodyContent={welcome_body_text}
                                title={welcome_title}
                            />
                            <Separator />
                            <Highlights
                                thumbnails={highlights_thumbnails}
                                title={highlights_title}
                            />
                        </>
                    )
                }

                <div style={{ height: '200rem' }} />

                <style jsx>
                    {`
                        img {
                            width: 100%;
                            height: calc(90vh - ${navHeight}rem);
                            position: relative;
                            top: 0;
                            left: 0;
                            overflow: hidden;
                        }
                    `}
                </style>
            </Layout>
        </NavLinksContext.Provider>
    );
};

export const getStaticProps: GetStaticProps = async context => {
    const { language } = context.params;

    const navLinks = await getNavLinks(context.params.language);
    const homePrismicDoc = await getPrismicDoc(language, 'home_page');

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            homePrismicDoc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default Home;
