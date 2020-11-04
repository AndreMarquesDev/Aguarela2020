import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import NavLinksContext from '../../components/context/NavLinksContext';
import { capitalize } from '../../utils/generic';

const ProjectsPage: NextPage = () => (
    <NavLinksContext.Provider value={{}}>
        <Layout>
            <Head>
                <title>
                    {capitalize('Projetos')}
                    {' '}
                    - Aguarela Digital
                </title>
            </Head>

            <div className="wrapper genericMargins" />
        </Layout>

        <style jsx>
            {`
                    li {
                        width: 20%;
                        height: auto;
                        margin: 10rem;
                    }
                `}
        </style>
    </NavLinksContext.Provider>
);

export default ProjectsPage;
