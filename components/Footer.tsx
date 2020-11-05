/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import TextsContext from './context/TextsContext';
import { Page } from '../utils/pages';

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
                    <a href="https://www.andremarquesdev.com" rel="noreferrer" target="_blank">André Marques</a>
                </p>
                <ul>
                    <li><a href="https://www.instagram.com/aguareladigital" rel="noreferrer" target="_blank">I</a></li>
                    <li><a href="https://www.facebook.com/aguareladigitalagency" rel="noreferrer" target="_blank">F</a></li>
                    <li>
                        <Link href={`/${language}/${'contact' as Page}`} prefetch={false}>
                            <a>
                                M
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
                                display: block;
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
