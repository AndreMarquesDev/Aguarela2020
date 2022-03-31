import React, { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { pagesMap } from '../../utils/pages';
import { TextsContext } from '../context/TextsContext';
import { LanguageButton } from '../LanguageButton/LanguageButton';
import { Locale } from '../../utils/locales';

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
        classNames(currentRoute.includes(link) && 'active');

    return (
        <ul className={linksContainerStyles}>
            {navLinks.map(link => (
                <li key={language + link}>
                    <Link href={`/${language}/${link}`} prefetch={false}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={linkStyles(link)}>{texts[`${link}`]}</a>
                    </Link>
                </li>
            ))}

            <li className={classNames('languageButton', isMobile && 'white')}>
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
                                    color: $white;
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

                        &:hover a,
                        .active {
                            color: $purple;
                        }

                        @include phablet {
                            margin: 0 calc(12.5rem / 2);
                        }

                        a {
                            display: inline-block;
                            @include fontS($textTransform: uppercase);
                            transition: color 0.15s linear;
                        }

                        &.languageButton {
                            @include fontXXS($textTransform: uppercase);
                            align-self: center;
                            margin-top: 5rem;
                            margin-left: 0;

                            &:hover {
                                color: $purple;
                            }

                            &.white {
                                @include fontXS($white, uppercase);
                                margin-top: 0;
                            }

                            @include phablet {
                                margin: 5rem calc(12.5rem / 2) 0;
                            }
                        }
                    }
                `}
            </style>
        </ul>
    );
};
