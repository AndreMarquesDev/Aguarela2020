/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { pagesMap } from '../utils/pages';
import TextsContext from './context/TextsContext';
import MenuIcon from './MenuIcon';
import { tabletBreakpoint, useWindowSize } from '../utils/useWindowSize';

interface NavLinksProps {
    currentRoute: string;
    language: string;
}

const NavLinks: FC<NavLinksProps> = ({ currentRoute, language }) => {
    const navLinks = pagesMap.filter(page => page !== 'homepage');
    const { texts: navTexts } = useContext(TextsContext);

    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > tabletBreakpoint;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (): void => setIsMenuOpen(!isMenuOpen);

    const linksContainerStyles = classNames(!isDesktop && 'mobileLayout', isMenuOpen && 'mobileMenuOpen');
    const linkStyles = (link: string): string => (
        classNames('animatedLink',
            currentRoute.includes(link) && 'active')
    );

    return (
        <ul className={linksContainerStyles}>
            {navLinks.map(link => (
                <li key={language + link}>
                    <Link href={`/${language}/${link}`} prefetch={false}>
                        <a className={linkStyles(link)}>
                            {navTexts[`${link}`]}
                        </a>
                    </Link>
                </li>
            ))}
            <MenuIcon isOpen={isMenuOpen} isVisible={!isDesktop} onClick={handleMenuClick} />

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    ul {
                        display: flex;

                        &.mobileLayout {
                            li {
                                display: none
                            }
                        }

                        &.mobileMenuOpen {
                            li {
                                display: block;
                            }
                        }
                    }

                    li {
                        margin: 0 25rem;

                        @include phablet {
                            margin: 0 calc(12.5rem / 2);
                        }

                        a {
                            @include fontS($textTransform: uppercase);

                            @include phablet {
                                @include fontXS($textTransform: uppercase);
                            }
                        }
                    }
                `}
            </style>
        </ul>
    );
};

export default NavLinks;
