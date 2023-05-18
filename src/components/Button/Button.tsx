import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Page } from '../../utils/pages';
import { mobileMediaQuery } from '../../styles/mediaQueries';

export interface ButtonProps {
    children: string;
    page?: Page;
    externalLink?: string;
    alignLeft?: boolean;
    isLowercased?: boolean;
    isSubmit?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({
    children,
    page,
    externalLink,
    alignLeft,
    isLowercased,
    isSubmit,
    disabled,
    onClick,
}: ButtonProps): JSX.Element => {
    const { query } = useRouter();

    const language = query.language?.toString();
    const buttonBackgroundContainerStyles = classNames(
        'buttonBackground',
        !alignLeft && 'alignCenter',
        disabled && 'disabled'
    );
    const buttonStyles = classNames(
        'buttonComponent',
        'fontS',
        isLowercased && 'buttonComponentLowercase'
    );

    return (
        <>
            <div className="buttonWrapper">
                <div className={buttonBackgroundContainerStyles}>
                    {/* eslint-disable-next-line no-nested-ternary */}
                    {isSubmit ? (
                        <button className={buttonStyles} type="submit" onClick={onClick}>
                            {children}
                        </button>
                    ) : externalLink ? (
                        <a
                            className={buttonStyles}
                            href={externalLink}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {children}
                        </a>
                    ) : (
                        <Link
                            className={buttonStyles}
                            href={`/${language}/${page}`}
                            prefetch={false}
                        >
                            {children}
                        </Link>
                    )}
                </div>
            </div>

            <style jsx>
                {`
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
                                background-color: var(--pink);
                            }

                            &:after {
                                background-color: var(--blue);
                            }
                        }

                        &:before,
                        &:after {
                            content: '';
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            transition: background-color, 0.2s;
                        }

                        &:before {
                            top: 0;
                            left: 0;
                            background-color: var(--blue);
                        }

                        &:after {
                            top: 8rem;
                            left: 8rem;
                            background-color: var(--pink);
                            z-index: -1;
                        }
                    }

                    .alignCenter {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .disabled {
                        opacity: 0.5;
                        pointer-events: none;
                    }

                    :global(.buttonComponent) {
                        width: 100%;
                        position: relative;
                        display: block;
                        padding: 10rem;
                        color: var(--yellow);
                        font-weight: bold;
                        text-transform: uppercase;
                        text-align: center;
                        outline: none;
                        z-index: 1;
                    }

                    :global(.buttonComponentLowercase) {
                        text-transform: none;

                        @media (${mobileMediaQuery}) {
                            font-size: var(--fontSizeXS);
                        }
                    }
                `}
            </style>
        </>
    );
};
