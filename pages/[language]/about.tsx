import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import NavLinksContext from '../../components/context/NavLinksContext';
import { capitalize } from '../../utils/generic';

const AboutPage: NextPage<any> = () => (
    <NavLinksContext.Provider value={{}}>
        <Layout>
            <Head>
                <title>
                    {capitalize('Sobre')}
                    {' '}
                    - Aguarela Digital
                </title>
            </Head>

            <div className="wrapper genericMargins">
                <Title text="titulo" />
            </div>
        </Layout>
    </NavLinksContext.Provider>
);

export default AboutPage;
