import React, { useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Client } from '../../prismic-configuration';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import Title from '../../components/Title';
import { getPrismicLocale, getInitialLocale } from '../../utils/locales/getLocale';
import { addLocaleToPageUrl } from '../../utils/routing/addLocaleToPageUrl';
import NavLinksContext from '../../components/context/NavLinksContext';
import { capitalize } from '../../utils/generic';

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

About.getInitialProps = async (context): Promise<IAboutProps> => {
    const prismicLocale = getPrismicLocale(context.query.language);

    const { req: request } = context; // eslint-disable-line id-length

    const navLinksResponse = await Client(request).query(
        Prismic.Predicates.at('document.type', 'nav_links'),
        { lang: prismicLocale },
    );
    const aboutResponse = await Client(request).query(
        Prismic.Predicates.at('document.type', 'about'),
        { lang: prismicLocale },
    );

    return {
        navLinksDocument: navLinksResponse.results[0],
        document: aboutResponse.results[0],
    };
};

export default About;
