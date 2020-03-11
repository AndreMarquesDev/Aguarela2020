/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export interface INavLink {
    spans: string[];
    text: string;
    type: string;
}

interface INavLinksProps {
    navLinks: Array<[string, INavLink[]]>;
    currentRoute: string;
    language: string;
}

const NavLinks: FC<INavLinksProps> = props => {
    const {
        navLinks,
        currentRoute,
        language,
    } = props;

    const linkStyles = (link: string): string => (
        classNames(
            'link',
            currentRoute === `/${link}` && 'active',
        )
    );

    return (
        <ul>
            {navLinks.map(link => {
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

            <style jsx>
                {`
                    ul {
                        display: flex;
                        justify-content: center;
                        list-style: none;
                        margin: 30rem 0;
                    }

                    li a {
                        font-size: 24rem;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin: 0 10rem;
                    }
                `}
            </style>
        </ul>
    );
};

export default NavLinks;
