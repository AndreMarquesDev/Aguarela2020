import type { Locale } from '../../types/Locale';
import type { Page } from '../../utils/pages';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useRef } from 'react';
import { tabletMediaQuery } from '../../styles/mediaQueries';
import { headerDataTestId, homepageLogoLinkDataTestId } from '../../utils/dataTestIds';
import { Breakpoint, useWindowSize } from '../../utils/useWindowSize';
import { NavLinksContext } from '../context/NavLinksContext';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import { NavLinks } from '../NavLinks/NavLinks';

export type HeaderProps = {
    currentRoute: string;
    language: Locale;
};

export const Header = ({ currentRoute, language }: HeaderProps): JSX.Element => {
    const { setNavHeight } = useContext(NavLinksContext);

    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (setNavHeight && navRef.current) {
            setNavHeight(navRef.current.clientHeight);
        }
    });

    const { isMenuOpen, toggleMenu } = useContext(NavLinksContext);
    const handleMenuClick = (): void => toggleMenu(!isMenuOpen);

    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Tablet;
    const isPhablet = windowSize.width < Breakpoint.Phablet;

    const logoWidth = isPhablet ? 150 : 250;

    return (
        <header data-testid={headerDataTestId}>
            <nav ref={navRef} className="wrapper">
                <Link
                    data-testid={homepageLogoLinkDataTestId}
                    href={`/${language}/${'homepage' as Page}`}
                    prefetch={false}
                >
                    <Image alt="Logo" height={35} src="/images/logo.svg" width={logoWidth} />
                </Link>

                <NavLinks
                    currentRoute={currentRoute}
                    isMenuOpen={isMenuOpen}
                    isMobile={!isDesktop}
                    language={language}
                />
                <MenuIcon isOpen={isMenuOpen} isVisible={!isDesktop} onClick={handleMenuClick} />
            </nav>

            <style jsx>
                {`
                    nav {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-top: 60rem;
                        padding-bottom: 60rem;

                        @media (${tabletMediaQuery}) {
                            padding-top: 30rem;
                            padding-bottom: 30rem;
                        }
                    }
                `}
            </style>
        </header>
    );
};
