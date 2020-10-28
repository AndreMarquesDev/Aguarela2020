/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import breakpoints from '../styles/breakpoints';

interface NavLinksProps {
    currentRoute: string;
    language: string;
}

const NavLinks: FC<NavLinksProps> = props => {
    const {
        currentRoute,
        language,
    } = props;

    const linkStyles = (link: string): string => (
        classNames('link',
            currentRoute === `/${link}` && 'active')
    );

    return (
        <ul className="genericMargins">
            <li>
                <Link href={`/${language}/linkType`} prefetch={false}>
                    <a className={linkStyles('link')}>
                        link
                    </a>
                </Link>
            </li>

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
