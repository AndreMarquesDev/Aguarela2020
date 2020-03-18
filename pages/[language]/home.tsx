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
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import WelcomeSection from '../../components/WelcomeSection';

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

    console.log('Prismic', homePrismicDoc.data);

    return (
        <NavLinksContext.Provider value={context}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <img alt="" src="https://via.placeholder.com/2560x700/8416ef/FFFFFF?text=Banner" />

                {
                    homePrismicDoc ? (
                        <WelcomeSection
                            bodyContent={homePrismicDoc.data.welcome_body_text}
                            title={homePrismicDoc.data.welcome_title}
                        />
                    ) : <NoContentErrorBlock />
                }

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
