import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import NavLinksContext, { NavLinksContextProps } from '../../components/context/NavLinksContext';

const HomePage: NextPage<any> = () => {
    const [navHeight, setNavHeight] = useState(0);

    const navLinksContext: NavLinksContextProps = {
        setNavHeight,
    };

    return (
        <NavLinksContext.Provider value={navLinksContext}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>
                <img
                    alt=""
                    loading="lazy"
                    src="https://via.placeholder.com/2560x1290/5865A2/FFFFFF?text=Banner"
                />

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
                    `}
                </style>
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default HomePage;
