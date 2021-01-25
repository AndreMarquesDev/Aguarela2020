/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { pagesMap } from '../utils/pages';
import TextsContext from './context/TextsContext';
import LanguageButton from './LanguageButton';
import { Locale } from '../utils/locales';

interface NavLinksProps {
    currentRoute: string;
    language: Locale;
    isMobile: boolean;
    isMenuOpen: boolean;
}

const NavLinks: FC<NavLinksProps> = ({ currentRoute, language, isMobile, isMenuOpen }) => {
    const navLinks = pagesMap.filter(page => page !== 'homepage');
    const { texts: navTexts } = useContext(TextsContext);

    const linksContainerStyles = classNames(isMobile && 'mobileLayout', isMenuOpen && isMobile && 'menuOpen');
    const linkStyles = (link: string): string => (
        classNames('animatedLink',
            currentRoute.includes(link) && 'active')
    );

    return (
        <ul className={linksContainerStyles}>
            {navLinks.map(link => (
                <li key={language + link}>
                    <Link href={`/${language}/${link}`} prefetch={false}>
                        <a className={linkStyles(link)}>
                            {navTexts[`${link}`]}
                        </a>
                    </Link>
                </li>
            ))}

            <li
                className={classNames('languageButton', isMobile && 'white')}
            >
                <LanguageButton />
            </li>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    ul {
                        display: flex;

                        &.mobileLayout {
                            display: none;

                            li {
                                a {
                                    @include fontS($white, uppercase);
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
                            z-index: 1;
                            background: $purple;
                        }
                    }

                    li {
                        margin: 0 25rem;

                        @include phablet {
                            margin: 0 calc(12.5rem / 2);
                        }

                        a {
                            @include fontS($textTransform: uppercase);

                            @include phablet {
                                @include fontXS($textTransform: uppercase);
                            }
                        }

                        &.languageButton {
                            @include fontXXS($textTransform: uppercase);
                            align-self: center;
                            margin-top: 5rem;

                            &.white {
                                @include fontXS($white, uppercase);
                                margin-top: 0;
                            }
                        }
                    }
                `}
            </style>
        </ul>
    );
};

export default NavLinks;
