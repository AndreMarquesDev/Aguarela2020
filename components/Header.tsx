/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import logo from '../public/images/logo.png';
import NavLinksContext from './context/NavLinksContext';

interface IHeaderProps {
    currentRoute: string;
    language: string;
}

const Header: FC<IHeaderProps> = props => {
    const {
        currentRoute,
        language,
    } = props;

    const linkStyles = (link: string): string => (
        classNames(
            'link',
            currentRoute === `/${link}` && 'active',
        )
    );

    const navLinksPrismicDoc = useContext(NavLinksContext);
    const navLinks = navLinksPrismicDoc && Object.entries(navLinksPrismicDoc.data);

    return (
        <nav>
            <Link href={`/${language}/home`} prefetch={false}>
                <a>
                    <img alt="Logo" src={logo} />
                </a>
            </Link>
            <ul>
                {navLinks?.map(link => {
                    const linkType = link[0];
                    const linkText = link[1][0].text;

                    return (
                        <li key={linkType}>
                            <Link href={`/${language}/${linkType}`} prefetch={false}>
                                <a className={linkStyles(linkType)}>
                                    {linkText}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>

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

                                ul {
                                    display: flex;
                                    justify-content: center;
                                    list-style: none;
                                    margin: 30rem 0;
                                }

                                li a {
                                    font-size: 24rem;
                                    margin: 0 10rem;
                                    text-transform: uppercase;
                                }
                            `}
            </style>
        </nav>
    );
};

export default Header;
