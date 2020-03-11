/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { Document } from 'prismic-javascript/d.ts/documents';
import logo from '../public/images/logo.png';
import NavLinksContext from './context/NavLinksContext';
import NavLinks, { INavLink } from './NavLinks';

interface IHeaderProps {
    currentRoute: string;
    language: string;
}

const Header: FC<IHeaderProps> = props => {
    const {
        currentRoute,
        language,
    } = props;

    const navLinksPrismicDoc: Document = useContext(NavLinksContext);
    const navLinks: Array<[string, INavLink[]]> = navLinksPrismicDoc && Object.entries(navLinksPrismicDoc.data);

    return (
        <nav>
            <Link href={`/${language}/home`} prefetch={false}>
                <a>
                    <img alt="Logo" src={logo} />
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
                    }

                    img {
                        width: 150rem;
                    }
                `}
            </style>
        </nav>
    );
};

export default Header;
