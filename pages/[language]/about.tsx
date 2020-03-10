import React, { useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Client } from '../../prismic-configuration';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import Title from '../../components/Title';
import { getInitialLocale, getPrismicLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import { capitalize } from '../../utils/generic';
import { staticPaths } from '../../utils/routing/getInitialProps';

interface IAboutProps {
    navLinksDocument: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    document: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const About: NextPage<IAboutProps> = props => {
    const {
        navLinksDocument,
        document,
    } = props;
    const router = useRouter();

    useEffect(() => {
        const locale = getInitialLocale();

        addLocaleToPageUrl('about', locale, router);
    });

    const pageTitle = document ? document.data.page_title : 'Sobre';

    return (
        <NavLinksContext.Provider value={navLinksDocument}>
            <Layout>
                <Head>
                    <title>
                        {capitalize(pageTitle)}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                {
                    document ? (
                        <div>
                            <Title text={RichText.asText(document.data.title)} />
                            <RichText render={document.data.textBody} />
                        </div>
                    ) : <NoContentErrorBlock />
                }
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
    const aboutResponse = await Client.query(
        Prismic.Predicates.at('document.type', 'about'),
        { lang: prismicLocale },
    );

    return {
        props: {
            navLinksDocument: navLinksResponse.results[0],
            document: aboutResponse.results[0],
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => staticPaths();

export default About;
