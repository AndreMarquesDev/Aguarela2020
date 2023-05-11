import React, { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { pagesMap } from '../../utils/pages';
import { TextsContext } from '../context/TextsContext';
import { LanguageButton } from '../LanguageButton/LanguageButton';
import { Locale } from '../../types/Locale';
import { TextsInterface } from '../../utils/texts';
import { phabletMediaQuery } from '../../styles/mediaQueries';

export interface NavLinksProps {
    currentRoute: string;
    language: Locale;
    isMobile: boolean;
    isMenuOpen: boolean;
}

export const NavLinks = ({
    currentRoute,
    language,
    isMobile,
    isMenuOpen,
}: NavLinksProps): JSX.Element => {
    const navLinks = pagesMap.filter(page => page !== 'homepage');
    const { texts } = useContext(TextsContext);

    const linksContainerStyles = classNames(
        isMobile && 'mobileLayout',
        isMenuOpen && isMobile && 'menuOpen'
    );
    const linkStyles = (link: string): string =>
        classNames('fontS', currentRoute.includes(link) && 'active');

    return (
        <ul className={linksContainerStyles}>
            {navLinks.map(link => (
                <li key={language + link}>
                    <Link href={`/${language}/${link}`} prefetch={false}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={linkStyles(link)}>{texts[link as keyof TextsInterface]}</a>
                    </Link>
                </li>
            ))}

            <li className={classNames('languageButton fontXXS', isMobile && 'white fontXS')}>
                <LanguageButton />
            </li>

            <style jsx>
                {`
                    ul {
                        display: flex;

                        &.mobileLayout {
                            display: none;

                            li {
                                a {
                                    color: var(--white);
                                    margin-bottom: 25rem;
                                }
                            }
                        }

                        &.menuOpen {
                            width: 100%;
                            height: 100vh;
                            position: fixed;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            top: 0;
                            left: 0;
                            z-index: 2;
                            background: var(--purple);
                        }
                    }

                    li {
                        margin: 0 25rem;

                        &:hover a,
                        .active {
                            color: var(--purple);
                        }

                        @media (${phabletMediaQuery}) {
                            margin: 0 calc(12.5rem / 2);
                        }

                        a {
                            display: inline-block;
                            text-transform: uppercase;
                            transition: color 0.15s linear;
                        }

                        &.languageButton {
                            align-self: center;
                            text-transform: uppercase;
                            margin-top: 5rem;
                            margin-left: 0;

                            &:hover {
                                color: var(--purple);
                            }

                            &.white {
                                color: var(--white);
                                margin-top: 0;
                            }

                            @media (${phabletMediaQuery}) {
                                margin: 5rem calc(12.5rem / 2) 0;
                            }
                        }
                    }
                `}
            </style>
        </ul>
    );
};
