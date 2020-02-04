/* eslint-disable no-console */
import React, { FC } from 'react';
import Head from 'next/head';
import GeneralStyles from '../styles/styles';
import Layout from '../components/Layout';

const Index: FC = () => (
    <Layout>

        <Head>
            <title>Aguarela Digital</title>
            <link
                href="/static/images/logo.png"
                rel="shortcut icon"
                type="image/x-icon"
            />
        </Head>
        <GeneralStyles />

        <p className="acumin">Hello World</p>

        {console.log('%c| 🔧 Developed by AndreMarquesDev ✏️ Designed by Aguarela Digital |', 'background: #000; color: #fff;')}
        {console.log('%c| https://github.com/AndreMarquesDev |', 'background: #000; color: #fff;')}
        {console.log('%c| https://www.instagram.com/aguareladigital |', 'background: #000; color: #fff;')}
    </Layout>
);

export default Index;
