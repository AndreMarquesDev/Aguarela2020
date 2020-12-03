/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TextsContext from './context/TextsContext';
import { Page } from '../utils/pages';

interface ButtonProps {
    page: Page;
}

const Button: FC<ButtonProps> = ({ page }) => {
    const {
        query,
    } = useRouter();

    const language = query.language?.toString();

    const { texts } = useContext(TextsContext);

    return (
        <>
            <div className="buttonContainer">
                <Link href={`/${language}/${page}`} prefetch={false}>
                    <a className="button">
                        {texts.seeMore}
                    </a>
                </Link>
            </div>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .buttonContainer {
                        min-width: 180rem;
                        position: relative;
                        text-align: center;
                        padding: 10rem;
                        margin-top: 50rem;
                        z-index: 0;
                        cursor: pointer;

                        &:hover {
                            &:before {
                                background-color: $pink;
                            }

                            &:after {
                                background-color: $blue;
                            }
                        }

                        &:before, &:after {
                            content: '';
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            transition: background-color, .2s;
                        }

                        &:before {
                            top: 0;
                            left: 0;
                            background-color: $blue;
                        }

                        &:after {
                            top: 12rem;
                            left: 12rem;
                            background-color: $pink;
                            z-index: -1;
                        }

                        .button {
                            @include fontS($yellow, uppercase, bold);
                            position: relative;
                            z-index: 0;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Button;
