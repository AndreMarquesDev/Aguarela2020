/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import TextsContext from './context/TextsContext';
import { Page } from '../utils/pages';
import LanguageButton from './LanguageButton';

interface FooterProps {
    language: string;
}

const Footer: FC<FooterProps> = ({ language }) => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <div className="wrapper">
                <p>
                    {texts.footerInfo}
                    {' '}
                    <a className="link" href="https://www.andremarquesdev.com" rel="noreferrer" target="_blank">André Marques</a>
                </p>

                <ul>
                    <LanguageButton language={language} />
                    <li>
                        <a href="https://www.instagram.com/aguareladigital" rel="noreferrer" target="_blank">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/aguareladigitalagency" rel="noreferrer" target="_blank">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <Link href={`/${language}/${'contact' as Page}`} prefetch={false}>
                            <a>
                                <FaEnvelope />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: $grey;
                        padding-top: 12.5rem;
                        padding-bottom: 12.5rem;
                    }

                    p {
                        @include fontXS(uppercase);
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
                            margin: 0 25rem;
                            color: $white;

                            &:before {
                                content: '';
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: $black;
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

export default Footer;
