/* eslint-disable no-nested-ternary, jsx-a11y/anchor-is-valid */
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
    isUppercased?: boolean;
    isSubmit?: boolean;
    onClick?: (event) => void;
}

const Button: FC<ButtonProps> = ({ children, page, externalLink, alignLeft, isUppercased, isSubmit, onClick }) => {
    const {
        query,
    } = useRouter();

    const language = query.language?.toString();
    const buttonBackgroundContainerStyles = classNames('buttonBackground', !alignLeft && 'alignCenter');
    const buttonStyles = classNames('button', isUppercased && 'uppercase');

    return (
        <>
            <div className="buttonWrapper">
                <div className={buttonBackgroundContainerStyles}>
                    {isSubmit ? (
                        <button className={buttonStyles} type="submit" onClick={onClick}>
                            {children}
                        </button>
                    ) : externalLink ? (
                        <a className={buttonStyles} href={externalLink} rel="noreferrer" target="_blank">
                            {children}
                        </a>
                    ) : (
                        <Link href={`/${language}/${page}`} prefetch={false}>
                            <a className={buttonStyles}>
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
                            top: 8rem;
                            left: 8rem;
                            background-color: $pink;
                            z-index: -1;
                        }

                        .button {
                            width: 100%;
                            position: relative;
                            display: block;
                            padding: 10rem;
                            @include fontS($yellow, uppercase, bold);
                            text-align: center;
                            outline: none;
                            z-index: 1;
                        }

                        .uppercase {
                            @include fontS($yellow, none, bold);

                            @include mobile {
                                @include fontXS($yellow, none, bold);
                            }
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
