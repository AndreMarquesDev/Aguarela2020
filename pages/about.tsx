// import React, { FC, useState, useEffect } from 'react';
// import React, { FC } from 'react';
import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import { Client } from '../prismic-configuration';

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

            <p>This is the about page</p>

            {
                document ? (
                    <div>
                        <h1>{RichText.asText(document.data.title)}</h1>
                        <RichText render={document.data.textBody} />
                    </div>
                ) : <div>No content</div>
            }
        </Layout>
    );
};

About.getInitialProps = async (context): Promise<IAboutProps> => {
    const { req: request } = context; // eslint-disable-line id-length
    const response = await Client(request).query(
        Prismic.Predicates.at('document.type', 'about'),
        { lang: 'pt-pt' },
    );

    return {
        document: response.results[0],
    };
};

export default About;
