import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const About: FC = () => (
    <Layout>
        <Head>
            <title>Sobre - Aguarela Digital</title>
        </Head>

        <p>This is the about page</p>
    </Layout>
);

export default About;
