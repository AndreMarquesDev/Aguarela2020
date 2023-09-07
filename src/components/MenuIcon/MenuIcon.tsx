import classNames from 'classnames';
import React from 'react';
import { menuIconButtonDataTestId } from '../../utils/dataTestIds';

export interface MenuIconProps {
    isOpen: boolean;
    isVisible: boolean;
    onClick: () => void;
}

export const MenuIcon = ({ isOpen, isVisible, onClick }: MenuIconProps): JSX.Element => {
    const openMenuStyles = classNames('menuIcon', isOpen && 'open', !isVisible && 'hidden');

    return (
        <>
            <i
                aria-label="toggle menu"
                className={openMenuStyles}
                data-testid={menuIconButtonDataTestId}
                role="button"
                tabIndex={0}
                onClick={onClick}
                onKeyPress={onClick}
            >
                <span />
            </i>

            <style jsx>
                {`
                    @keyframes topToCross {
                        0% {
                            top: 0;
                            transform: rotate(0);
                        }

                        50% {
                            top: 12px;
                            transform: rotate(0);
                        }

                        100% {
                            top: 12px;
                            transform: rotate(45deg);
                        }
                    }

                    @keyframes topToBurguer {
                        0% {
                            top: 12px;
                            transform: rotate(45deg);
                        }

                        50% {
                            top: 12px;
                            transform: rotate(0deg);
                        }

                        100% {
                            top: 0;
                            transform: rotate(0deg);
                        }
                    }

                    @keyframes bottomToCross {
                        0% {
                            bottom: 0;
                            transform: rotate(0);
                        }

                        50% {
                            bottom: 12px;
                            transform: rotate(0);
                        }

                        100% {
                            bottom: 12px;
                            transform: rotate(135deg);
                        }
                    }

                    @keyframes bottomToBurguer {
                        0% {
                            bottom: 12px;
                            transform: rotate(135deg);
                        }

                        50% {
                            bottom: 12px;
                            transform: rotate(0);
                        }

                        100% {
                            bottom: 0;
                            transform: rotate(0);
                        }
                    }

                    @keyframes middleToCross {
                        50%,
                        100% {
                            transform: scale(0);
                        }
                    }

                    @keyframes middleToBurguer {
                        0%,
                        50% {
                            transform: scale(0);
                        }

                        100% {
                            transform: scale(1);
                        }
                    }

                    @keyframes menuHover {
                        0% {
                            width: 100%;
                        }

                        50% {
                            width: 50%;
                        }

                        100% {
                            width: 100%;
                        }
                    }

                    .menuIcon {
                        width: 40rem;
                        margin-left: 25rem;
                        cursor: pointer;
                        outline: none;

                        &.hidden {
                            display: none;
                        }

                        &.open,
                        &.open:hover {
                            z-index: 2;

                            &:before,
                            span,
                            &:after {
                                background: var(--white);
                            }

                            &:before {
                                animation: topToCross 0.7s ease forwards;
                            }

                            span {
                                animation: middleToCross 0.7s ease forwards;
                            }

                            &:after {
                                animation: bottomToCross 0.7s ease forwards;
                            }
                        }

                        &:hover {
                            &:before {
                                animation:
                                    topToBurguer 0.7s ease forwards,
                                    menuHover 1s infinite ease-in-out alternate;
                            }

                            span {
                                animation:
                                    middleToBurguer 0.7s ease forwards,
                                    menuHover 1s infinite ease-in-out alternate forwards 200ms;
                            }

                            &:after {
                                animation:
                                    bottomToBurguer 0.7s ease forwards,
                                    menuHover 1s infinite ease-in-out alternate forwards 400ms;
                            }
                        }

                        &:before,
                        span,
                        &:after {
                            content: '';
                            width: 100%;
                            height: 2rem;
                            display: block;
                            position: relative;
                            background: var(--black);
                            border-radius: 3rem;
                        }

                        &:before {
                            margin: 0 auto;
                            animation: topToBurguer 0.7s ease forwards;
                        }

                        span {
                            margin: 10rem auto 0;
                            animation: middleToBurguer 0.7s ease forwards;
                        }

                        &:after {
                            margin: 10rem auto 0;
                            animation: bottomToBurguer 0.7s ease forwards;
                        }
                    }
                `}
            </style>
        </>
    );
};
