import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import classNames from 'classnames';
import { Layout } from '../../components/Layout/Layout';
import NavLinksContext, { NavLinksContextProps } from '../../components/context/NavLinksContext';
import WelcomeBlock from '../../components/WelcomeBlock/WelcomeBlock';
import { SkillsBlock } from '../../components/SkillsBlock/SkillsBlock';
import Workflow from '../../components/Workflow/Workflow';
import { ProjectsList } from '../../components/ProjectsList/ProjectsList';
import LetsWork from '../../components/LetsWork/LetsWork';
import BrandsList from '../../components/BrandsList/BrandsList';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';

const Homepage: NextPage = () => {
    const [navHeight, setNavHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

    const navLinksContext: NavLinksContextProps = {
        isMenuOpen,
        toggleMenu,
        setNavHeight,
    };

    const windowSize = useWindowSize();
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <NavLinksContext.Provider value={navLinksContext}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <div className={classNames('homepageBanner', isMobile && 'mobileNavHeight')}>
                    <Image
                        priority
                        alt="homepage banner"
                        layout="fill"
                        objectFit="cover"
                        src="/images/homepage-banner.jpg"
                    />
                </div>

                <WelcomeBlock />
                <SkillsBlock />
                <Workflow />
                <ProjectsList />
                <BrandsList />
                <LetsWork />

                <style jsx>
                    {`
                        .homepageBanner {
                            width: 100%;
                            height: calc(90vh - ${navHeight}px);
                            position: relative;

                            &.mobileNavHeight {
                                height: calc(50vh - ${navHeight}px);
                            }
                        }
                    `}
                </style>
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default Homepage;
