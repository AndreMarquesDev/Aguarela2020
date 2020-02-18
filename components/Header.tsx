/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import logo from '../public/images/logo.png';

interface IHeaderProps {
    currentRoute: string;
    language: string | string[];
}

const Header: FC<IHeaderProps> = props => {
    const {
        currentRoute,
        language,
    } = props;

    const aboutLinkStyles = classNames(
        'link',
        currentRoute === '/about' && 'active',
    );
    const projectsLinkStyles = classNames(
        'link',
        currentRoute === '/projects' && 'active',
    );
    const servicesLinkStyles = classNames(
        'link',
        currentRoute === '/services' && 'active',
    );
    const contactLinkStyles = classNames(
        'link',
        currentRoute === '/contact' && 'active',
    );

    return (
        <nav>
            <Link href="/">
                <a>
                    <img alt="Logo" src={logo} />
                </a>
            </Link>
            <ul>
                <li>
                    <Link href={`/${language}/about`}>
                        <a className={aboutLinkStyles}>Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/${language}/projects`}>
                        <a className={projectsLinkStyles}>Projetos</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/${language}/services`}>
                        <a className={servicesLinkStyles}>Serviços</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/${language}/contact`}>
                        <a className={contactLinkStyles}>Contacto</a>
                    </Link>
                </li>
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
