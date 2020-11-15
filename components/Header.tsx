/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinksContext from './context/NavLinksContext';
import NavLinks from './NavLinks';
import { Page } from '../utils/pages';

interface HeaderProps {
    currentRoute: string;
    language: string;
}

const Header: FC<HeaderProps> = ({ currentRoute, language }) => {
    const {
        setNavHeight,
    } = useContext(NavLinksContext);

    const navRef = useRef(null);

    useEffect(() => {
        if (setNavHeight) {
            setNavHeight(navRef.current.clientHeight);
        }
    });

    return (
        <header>
            <nav ref={navRef} className="wrapper">
                <Link href={`/${language}/${'homepage' as Page}`} prefetch={false}>
                    <a>
                        <Image
                            alt="Logo"
                            height={35}
                            src="/images/logo.svg"
                            width={250}
                        />
                    </a>
                </Link>

                <NavLinks
                    currentRoute={currentRoute}
                    language={language}
                />
            </nav>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    nav {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-top: 60rem;
                        padding-bottom: 60rem;
                    }

                    @include tablet {
                        nav {
                            padding-top: 30rem;
                            padding-bottom: 30rem;
                        }
                    }
                `}
            </style>
        </header>
    );
};

export default Header;
