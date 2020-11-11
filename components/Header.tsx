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
        <nav ref={navRef} className="wrapper">
            <Link href={`/${language}/${'homepage' as Page}`} prefetch={false}>
                <a>
                    <Image
                        alt="Logo"
                        height={60}
                        src="/images/logo.svg"
                        width={300}
                    />
                </a>
            </Link>

            <NavLinks
                currentRoute={currentRoute}
                language={language}
            />

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    nav {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-top: 80rem;
                        padding-bottom: 80rem;
                    }

                    @include tablet {
                        nav {
                            padding-top: 40rem;
                            padding-bottom: 40rem;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Header;
