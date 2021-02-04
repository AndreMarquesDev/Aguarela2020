import classNames from 'classnames';
import React, { FC } from 'react';

interface MenuIconProps {
    isOpen: boolean;
    isVisible: boolean;
    onClick: () => void;
}

const MenuIcon: FC<MenuIconProps> = ({ isOpen, isVisible, onClick }) => {
    const openMenuStyles = classNames('menuIcon', isOpen && 'open', !isVisible && 'hidden');

    return (
        <>
            <i aria-label="toggle menu" className={openMenuStyles} role="button" tabIndex={0} onClick={onClick} onKeyPress={onClick}><span /></i>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .menuIcon {
                        width: 40rem;
                        margin-left: 25rem;
                        cursor: pointer;
                        outline: none;

                        &.hidden {
                            display: none;
                        }

                        &.open, &.open:hover {
                            z-index: 1;

                            &:before, span, &:after {
                                background: $white;
                            }

                            &:before {
                                animation: topToCross .7s ease forwards;
                            }

                            span {
                                animation: middleToCross .7s ease forwards;
                            }

                            &:after {
                                animation: bottomToCross .7s ease forwards;
                            }
                        }

                        &:hover {
                            &:before {
                                animation: topToBurguer .7s ease forwards, menuHover 1s infinite ease-in-out alternate;
                            }

                            span {
                                animation: middleToBurguer .7s ease forwards, menuHover 1s infinite ease-in-out alternate forwards 200ms;
                            }

                            &:after {
                                animation: bottomToBurguer .7s ease forwards, menuHover 1s infinite ease-in-out alternate forwards 400ms;
                            }
                        }

                        &:before, span, &:after {
                            content: '';
                            width: 100%;
                            height: 2rem;
                            display: block;
                            position: relative;
                            background: $black;
                            border-radius: 3rem;
                        }

                        &:before {
                            margin: 0 auto;
                            animation: topToBurguer .7s ease forwards;
                        }

                        span {
                            margin: 10rem auto 0;
                            animation: middleToBurguer .7s ease forwards;
                        }

                        &:after {
                            margin: 10rem auto 0;
                            animation: bottomToBurguer .7s ease forwards;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default MenuIcon;
