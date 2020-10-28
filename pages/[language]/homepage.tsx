import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import NavLinksContext, { NavLinksContextProps } from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/getInitialProps';
import WelcomeSection from '../../components/WelcomeSection';
import Highlights, { HighlightsThumbnail } from '../../components/Highlights';
import Separator from '../../components/Separator';
import Clients, { ClientsThumbnail } from '../../components/Clients';
import ContactTextBlock from '../../components/ContactTextBlock';
import FollowUs from '../../components/FollowUs';
import { PrismicText, PrismicLink } from '../../typings/prismicTypes';

interface HomePageProps {
    navLinksPrismicDoc: Document;
    homePagePrismicDoc: Document;
}

interface HomePagePrismicDoc {
    welcomeTitle: PrismicText;
    welcomeBodyText: PrismicText[];
    highlightsTitle: PrismicText;
    highlightsThumbnails: HighlightsThumbnail[];
    clientsTitle: PrismicText;
    clientsThumbnails: ClientsThumbnail[];
    contactUsTitle: PrismicText;
    contactUsBodyText: PrismicText[];
    contactUsCta: PrismicText;
    followUsTitle: PrismicText;
    followUsLink: PrismicLink;
    followUsLinkText: PrismicText;
}

const HomePage: NextPage<HomePageProps> = props => {
    const {
        navLinksPrismicDoc,
        homePagePrismicDoc,
    } = props;

    const [navHeight, setNavHeight] = useState(0);

    const navLinksContext: NavLinksContextProps = {
        navLinksPrismicDoc,
        setNavHeight,
    };

    const {
        welcomeTitle,
        welcomeBodyText,
        highlightsTitle,
        highlightsThumbnails,
        clientsTitle,
        clientsThumbnails,
        contactUsTitle,
        contactUsBodyText,
        contactUsCta,
        followUsTitle,
        followUsLink,
        followUsLinkText,
    }: HomePagePrismicDoc = homePagePrismicDoc.data;

    return (
        <NavLinksContext.Provider value={navLinksContext}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>
                <img
                    alt=""
                    loading="lazy"
                    src="https://via.placeholder.com/2560x1290/5865A2/FFFFFF?text=Banner"
                />

                {homePagePrismicDoc && (
                    <>
                        <WelcomeSection
                            bodyText={welcomeBodyText}
                            title={welcomeTitle}
                        />
                        <Separator />
                        <Highlights
                            thumbnails={highlightsThumbnails}
                            title={highlightsTitle}
                        />
                        <Clients
                            thumbnails={clientsThumbnails}
                            title={clientsTitle}
                        />
                        <ContactTextBlock
                            bodyText={contactUsBodyText}
                            ctaText={contactUsCta}
                            title={contactUsTitle}
                        />
                        <Separator />
                        <FollowUs
                            link={followUsLink}
                            linkText={followUsLinkText}
                            title={followUsTitle}
                        />
                    </>
                )}

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
    const homePagePrismicDoc = await getPrismicDoc(language, 'homepage');

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            homePagePrismicDoc,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default HomePage;
