/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext, useRef, useEffect } from 'react';
import Link from 'next/link';
import logo from '../public/images/logo.svg';
import NavLinksContext from './context/NavLinksContext';
import NavLinks, { NavLink } from './NavLinks';
import breakpoints from '../styles/breakpoints';
import { Page } from '../utils/pages';

interface HeaderProps {
    currentRoute: string;
    language: string;
}

const Header: FC<HeaderProps> = props => {
    const {
        currentRoute,
        language,
    } = props;

    const {
        navLinksPrismicDoc,
        setNavHeight,
    } = useContext(NavLinksContext);

    const navRef = useRef(null);

    useEffect(() => {
        if (setNavHeight) {
            setNavHeight(navRef.current.clientHeight);
        }
    });

    const navLinks: Array<[string, NavLink[]]> = navLinksPrismicDoc && Object.entries(navLinksPrismicDoc.data);

    return (
        <nav ref={navRef} className="wrapper">
            <Link href={`/${language}/${'homepage' as Page}`} prefetch={false}>
                <a>
                    <img
                        alt="Logo"
                        loading="lazy"
                        src={logo}
                    />
                </a>
            </Link>

            {navLinks
            && (
                <NavLinks
                    currentRoute={currentRoute}
                    language={language}
                    navLinks={navLinks}
                />
            )}

            <style jsx>
                {`
                    nav {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        padding-top: 100rem;
                    }

                    img {
                        max-width: 415rem;
                        width: 100%;
                    }

                    @media (max-width: ${breakpoints.tablet}) {
                        nav {
                            padding-top: 50rem;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Header;
