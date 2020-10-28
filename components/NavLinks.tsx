/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { getPrismicText } from '../utils/generic';
import breakpoints from '../styles/breakpoints';

export interface NavLink {
    spans: string[];
    text: string;
    type: string;
}

interface NavLinksProps {
    navLinks: Array<[string, NavLink[]]>;
    currentRoute: string;
    language: string;
}

const NavLinks: FC<NavLinksProps> = props => {
    const {
        navLinks,
        currentRoute,
        language,
    } = props;

    const linkStyles = (link: string): string => (
        classNames('link',
            currentRoute === `/${link}` && 'active')
    );

    return (
        <ul className="genericMargins">
            {navLinks.map(link => {
                const linkType = link[0];
                const linkText = getPrismicText(link[1]);

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
                        flex-wrap: wrap;
                        justify-content: center;
                        list-style: none;
                        margin-bottom: 0;
                    }

                    li {
                        margin: 0 10rem 15rem;

                        &:last-child {
                            margin-bottom: 30rem;

                        }

                        a {
                            font-size: 24rem;
                            text-transform: uppercase;
                        }

                    }

                    @media (max-width: ${breakpoints.mobile}) {
                        li {
                            margin: 0 5rem 10rem;

                            &:last-child {
                                margin-bottom: 15rem;

                            }
                        }
                    }
                `}
            </style>
        </ul>
    );
};

export default NavLinks;
