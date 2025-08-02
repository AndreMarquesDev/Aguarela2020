import type { Locale } from '../../types/Locale';
import type { Page } from '../../utils/pages';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { tabletMediaQuery } from '../../styles/mediaQueries';
import { footerDataTestId } from '../../utils/dataTestIds';
import {
    aguarelaDigitalFacebookUrl,
    aguarelaDigitalInstagramUrl,
    andreMarquesDevWebsiteUrl,
} from '../../utils/urls';
import { TextsContext } from '../context/TextsContext';

export type FooterProps = {
    language: Locale;
};

export const Footer = ({ language }: FooterProps): JSX.Element => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <footer data-testid={footerDataTestId}>
                <div className="wrapper">
                    <p className="fontXS">
                        {texts.footerInfo}
                        {' '}
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
                                className="iconLink"
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
                                className="iconLink"
                                href={aguarelaDigitalFacebookUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <Link
                                aria-label="Go to contact page"
                                className="iconLink"
                                href={`/${language}/${'contact' as Page}`}
                                prefetch={false}
                            >
                                <FaEnvelope />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>

            <style jsx>
                {`
                    footer {
                        background: var(--blue);
                        padding-top: 12.5rem;
                        padding-bottom: 12.5rem;
                    }

                    .wrapper {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        @media (${tabletMediaQuery}) {
                            flex-direction: column-reverse;
                        }
                    }

                    p {
                        color: var(--white);
                        text-transform: uppercase;

                        @media (${tabletMediaQuery}) {
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
                            color: var(--blue);

                            &:before {
                                content: '';
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: var(--white);
                                border-radius: 50%;
                            }
                        }
                    }

                    :global(.iconLink) {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                    }
                `}
            </style>
        </>
    );
};
