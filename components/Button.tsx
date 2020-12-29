/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Page } from '../utils/pages';

interface ButtonProps {
    children: string;
    page?: Page;
    externalLink?: string;
    alignLeft?: boolean;
}

const Button: FC<ButtonProps> = ({ children, page, externalLink, alignLeft }) => {
    const {
        query,
    } = useRouter();

    const language = query.language?.toString();
    const buttonBackgroundContainerStyles = classNames('buttonBackground', !alignLeft && 'alignCenter');

    return (
        <>
            <div className="buttonWrapper">
                <div className={buttonBackgroundContainerStyles}>
                    {externalLink ? (
                        <a className="button" href={externalLink} rel="noreferrer" target="_blank">
                            {children}
                        </a>
                    ) : (
                        <Link href={`/${language}/${page}`} prefetch={false}>
                            <a className="button">
                                {children}
                            </a>
                        </Link>

                    )}
                </div>
            </div>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .buttonWrapper {
                        width: 100%;
                        display: block;
                    }

                    .buttonBackground {
                        min-width: 180rem;
                        display: inline-block;
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

                    .alignCenter {
                        left: 50%;
                        transform: translateX(-50%);
                    }
                `}
            </style>
        </>
    );
};

export default Button;
