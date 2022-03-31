import React, { useContext } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { TextsContext } from '../context/TextsContext';
import { Page } from '../../utils/pages';
import { Locale } from '../../utils/locales';
import { footerDataTestId } from '../../utils/dataTestIds';
import {
    aguarelaDigitalFacebookUrl,
    aguarelaDigitalInstagramUrl,
    andreMarquesDevWebsiteUrl,
} from '../../utils/urls';

export interface FooterProps {
    language: Locale;
}

export const Footer = ({ language }: FooterProps): JSX.Element => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <footer data-testid={footerDataTestId}>
                <div className="wrapper">
                    <p>
                        {texts.footerInfo}{' '}
                        <a
                            className="animatedLink animatedLinkWhite"
                            href={andreMarquesDevWebsiteUrl}
                            rel="noreferrer"
                            target="_blank"
                        >
                            André Marques
                        </a>
                    </p>

                    <ul>
                        <li>
                            <a
                                aria-label="Aguarela instagram"
                                href={aguarelaDigitalInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="Aguarela facebook"
                                href={aguarelaDigitalFacebookUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <Link href={`/${language}/${'contact' as Page}`} prefetch={false}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a aria-label="Go to contact page">
                                    <FaEnvelope />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    footer {
                        background: $blue;
                        padding-top: 12.5rem;
                        padding-bottom: 12.5rem;
                    }

                    .wrapper {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        @include tablet {
                            flex-direction: column-reverse;
                        }
                    }

                    p {
                        @include fontXS($white, uppercase);

                        @include tablet {
                            margin-top: 25rem;
                            text-align: center;
                        }
                    }

                    ul {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        li {
                            width: 35rem;
                            height: 35rem;
                            position: relative;
                            text-align: center;
                            margin: 0 calc(25rem / 2);
                            color: $blue;

                            &:before {
                                content: '';
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: $white;
                                border-radius: 50%;
                            }

                            a {
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                position: relative;
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};
