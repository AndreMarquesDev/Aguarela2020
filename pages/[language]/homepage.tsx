import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import NavLinksContext, { INavLinksContext } from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks, getPrismicDoc } from '../../utils/getInitialProps';
import WelcomeSection from '../../components/WelcomeSection';
import Highlights, { IHighlightsThumbnail } from '../../components/Highlights';
import Separator from '../../components/Separator';
import Clients, { IClientsThumbnail } from '../../components/Clients';
import ContactTextBlock from '../../components/ContactTextBlock';
import FollowUs from '../../components/FollowUs';
import { IPrismicText, IPrismicLink } from '../../typings/prismicTypes';
import { getInstagramPosts, IInstagramPost } from '../../utils/generic';
import InstagramPostsContext, { IInstagramPostsContext } from '../../components/context/InstagramPostsContext';

interface IHomePageProps {
    navLinksPrismicDoc: Document;
    homePagePrismicDoc: Document;
    instagramPosts: IInstagramPost[];
}

interface IHomePagePrismicDoc {
    welcomeTitle: IPrismicText;
    welcomeBodyText: IPrismicText[];
    highlightsTitle: IPrismicText;
    highlightsThumbnails: IHighlightsThumbnail[];
    clientsTitle: IPrismicText;
    clientsThumbnails: IClientsThumbnail[];
    contactUsTitle: IPrismicText;
    contactUsBodyText: IPrismicText[];
    contactUsCta: IPrismicText;
    followUsTitle: IPrismicText;
    followUsLink: IPrismicLink;
    followUsLinkText: IPrismicText;
}

const HomePage: NextPage<IHomePageProps> = props => {
    const {
        navLinksPrismicDoc,
        homePagePrismicDoc,
        instagramPosts,
    } = props;

    const [navHeight, setNavHeight] = useState(0);

    const navLinksContext: INavLinksContext = {
        navLinksPrismicDoc,
        setNavHeight,
    };

    const instagramPostsContext: IInstagramPostsContext = {
        posts: instagramPosts,
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
    }: IHomePagePrismicDoc = homePagePrismicDoc.data;

    return (
        <NavLinksContext.Provider value={navLinksContext}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <img alt="" src="https://via.placeholder.com/2560x1290/5865A2/FFFFFF?text=Banner" />

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
                        <InstagramPostsContext.Provider value={instagramPostsContext}>
                            <FollowUs
                                link={followUsLink}
                                linkText={followUsLinkText}
                                title={followUsTitle}
                            />
                        </InstagramPostsContext.Provider>
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
    const instagramPosts = await getInstagramPosts(10);

    return {
        props: {
            navLinksPrismicDoc: navLinks,
            homePagePrismicDoc,
            instagramPosts,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default HomePage;
