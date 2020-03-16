import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext, { INavLinksContext } from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks } from '../../utils/routing/getInitialProps';

interface IHomeProps {
    navLinksPrismicDoc: Document;
}

const Home: NextPage<IHomeProps> = props => {
    const {
        navLinksPrismicDoc,
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

    return (
        <NavLinksContext.Provider value={context}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <img alt="" src="https://via.placeholder.com/2560x700/8416ef/FFFFFF?text=Banner" />
                <p>This is the homepage</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>

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
                        p {
                            margin-bottom: 20rem;
                        }
                    `}
                </style>
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

export default Home;
