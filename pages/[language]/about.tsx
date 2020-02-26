import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { Client } from '../../prismic-configuration';
import NoContentErrorBlock from '../../components/NoContentErrorBlock';
import Title from '../../components/Title';
import { getPrismicLocale } from '../../utils/locales/getLocale';

interface IAboutProps {
    document: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const About: NextPage<IAboutProps> = props => {
    const {
        document,
    } = props;

    return (
        <Layout>
            <Head>
                <title>Sobre - Aguarela Digital</title>
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
    );
};

About.getInitialProps = async (context): Promise<IAboutProps> => {
    const prismicLocale = getPrismicLocale(context.query.language);

    const { req: request } = context; // eslint-disable-line id-length
    const response = await Client(request).query(
        Prismic.Predicates.at('document.type', 'about'),
        { lang: prismicLocale },
    );

    return {
        document: response.results[0],
    };
};

export default About;
