/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import Link from 'next/link';
import logo from '../static/images/logo.png';

const Header: FC = () => (
    <nav>
        <Link href="/">
            <a>
                <img alt="Logo" src={logo} />
            </a>
        </Link>
        <ul>
            <li>
                <Link href="/about">
                    <a className="link">Sobre</a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a className="link">Projetos</a>
                </Link>
            </li>
            <li>
                <Link href="/services">
                    <a className="link">Serviços</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a className="link">Contacto</a>
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

export default Header;
