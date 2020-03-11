import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Document } from 'prismic-javascript/d.ts/documents';
import Layout from '../../components/Layout';
import { getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import { staticPaths, getNavLinks } from '../../utils/routing/getInitialProps';
import { useWindowSize } from '../../utils/generic';

interface IHomeProps {
    navLinksPrismicDoc: Document;
}

const Home: NextPage<IHomeProps> = props => {
    const {
        navLinksPrismicDoc,
    } = props;
    const router = useRouter();

    const {
        windowWidth,
        windowHeight,
    } = useWindowSize();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('home', locale, router);
    });

    return (
        <NavLinksContext.Provider value={navLinksPrismicDoc}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <div>
                    <p>
                        {windowWidth}
                        px /
                        {' '}
                        {windowHeight}
                        px
                    </p>

                    <img alt="" src={`https://via.placeholder.com/2560x${windowHeight}`} />
                </div>
                <p>This is the homepage</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate culpa expedita sint consectetur dignissimos enim iste, ex odio recusandae, reprehenderit distinctio nesciunt? Facilis voluptatibus dolorum vitae sed molestias assumenda quas?</p>

                <style jsx>
                    {`
                        div {
                            background: aqua;
                        }
                        img {
                            width: 100%;
                            height: ${windowHeight}px;
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
    const navLinks = await getNavLinks(context.params.language);

    return {
        props: {
            navLinksPrismicDoc: navLinks,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default Home;
