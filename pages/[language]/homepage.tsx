import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Image from 'next/image';
import classNames from 'classnames';
import { Layout } from '../../src/components/Layout/Layout';
import {
    NavLinksContext,
    NavLinksContextProps,
} from '../../src/components/context/NavLinksContext';
import { WelcomeBlock } from '../../src/components/WelcomeBlock/WelcomeBlock';
import { SkillsBlock } from '../../src/components/SkillsBlock/SkillsBlock';
import { Workflow } from '../../src/components/Workflow/Workflow';
import { ProjectsList } from '../../src/components/ProjectsList/ProjectsList';
import { LetsWork } from '../../src/components/LetsWork/LetsWork';
import { BrandsList } from '../../src/components/BrandsList/BrandsList';
import { useWindowSize, Breakpoint } from '../../src/utils/useWindowSize';
import { homepageBannerContainerDataTestId } from '../../src/utils/dataTestIds';

const Homepage: NextPage = () => {
    const [navHeight, setNavHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinksContextValue = useMemo<NavLinksContextProps>(
        () => ({
            isMenuOpen,
            toggleMenu: (): void => setIsMenuOpen(!isMenuOpen),
            setNavHeight,
        }),
        [isMenuOpen]
    );

    const windowSize = useWindowSize();
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <NavLinksContext.Provider value={navLinksContextValue}>
            <Layout>
                <Head>
                    <title>Aguarela Digital</title>
                </Head>

                <div
                    className={classNames('homepageBanner', isMobile && 'mobileNavHeight')}
                    data-testid={homepageBannerContainerDataTestId}
                >
                    <Image
                        fill
                        priority
                        alt="homepage banner"
                        src="/images/homepage-banner.jpg"
                        style={{
                            objectFit: 'cover',
                        }}
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
