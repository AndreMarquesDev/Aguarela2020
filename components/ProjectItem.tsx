import React, { FC, useContext, TouchEvent } from 'react';
import Image from 'next/image';
import { isClientSide } from 'multilingual-url/lib';
import classNames from 'classnames';
import TextsContext from './context/TextsContext';
import { resetTimesTouchedAttribute } from '../utils/generic';

interface ProjectItemProps {
    imageSrc: string;
    imageAlt: string;
    brandLink: string;
    brandTag: string;
    description: string;
    isDesktop: boolean;
    year?: number | string;
    isInPartnership?: boolean;
    isActive?: boolean;
    isGrid?: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({ imageSrc, imageAlt, brandLink, brandTag, description, year, isDesktop, isInPartnership, isActive, isGrid }) => {
    const { texts } = useContext(TextsContext);

    const isTouch = isClientSide && window?.matchMedia('(hover: none), (pointer: coarse)').matches;
    const carouselItemStyles = classNames('carouselItem', isTouch && 'touch');

    const handleTouch = (event: TouchEvent<HTMLElement>): void => {
        const target = event.currentTarget;
        const timesTouched = parseInt(target.dataset.timesTouched);

        if (timesTouched === 0) {
            resetTimesTouchedAttribute();
            target.dataset.timesTouched = '1';
        } else {
            (target.querySelector('a.brand.link') as HTMLAnchorElement).click();
        }
    };

    return (
        <>
            {isDesktop ? (
                <li className={classNames(isTouch && 'touch', isGrid && 'grid')} data-times-touched={0} onTouchStart={handleTouch}>
                    <Image
                        alt={imageAlt}
                        height={400}
                        src={imageSrc}
                        width={400}
                    />
                    <div className="backface">
                        <a className="brand link" href={brandLink} rel="noreferrer" target="_blank">{brandTag}</a>
                        <p className="description">{description}</p>
                        {year && (
                            <p className="date">
                                {isActive && `${texts.since} `}
                                {year}
                            </p>
                        )}
                        {isInPartnership && (
                            <small>
                                *
                                {' '}
                                {texts.inPartnershipWith}
                                {' '}
                                Sofia Ferreirinho
                            </small>
                        )}
                    </div>
                </li>
            ) : (
                <div className={carouselItemStyles} data-times-touched={0} onTouchStart={handleTouch}>
                    <Image
                        alt={imageAlt}
                        height={400}
                        src={imageSrc}
                        width={400}
                    />
                    <div className="backface">
                        <a className="brand link" href={brandLink} rel="noreferrer" target="_blank">{brandTag}</a>
                        <p className="description">{description}</p>
                        {year && (
                            <p className="date">
                                {isActive && `${texts.since} `}
                                {year}
                            </p>
                        )}
                        {isInPartnership && (
                            <small>
                                *
                                {' '}
                                {texts.inPartnershipWith}
                                {' '}
                            </small>
                        )}
                    </div>
                </div>
            )}

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    li {
                        max-height: 400rem;
                        position: relative;
                        margin-right: 2%;

                        &:last-child {
                            margin-right: 0;
                        }

                        &:hover {
                            .backface {
                                display: flex;
                            }
                        }

                        &.grid {
                            margin: 0 4% 25rem;

                            @include tablet {
                                margin: 0 2% 25rem;
                            }

                            .backface {
                                .brand, .date {
                                    @include fontS($yellow, uppercase);

                                    @include desktop {
                                        @include fontXS($yellow, uppercase);
                                    }

                                    @include tablet {
                                        @include fontXXS($yellow, uppercase);
                                    }
                                }

                                .description {
                                    @include fontS($yellow);

                                    @include desktop {
                                        @include fontXS($yellow);
                                    }

                                    @include tablet {
                                        @include fontXXS($yellow);
                                    }
                                }

                                small {
                                    @include tablet {
                                        @include fontXXS($yellow);
                                    }
                                }
                            }
                        }
                    }

                    .carouselItem {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;

                        &:hover {
                            .backface {
                                display: flex;
                            }
                        }
                    }

                    .backface {
                        display: none;
                        max-width: 400rem;
                        max-height: 400rem;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        background: $blue;
                        padding: 10rem;

                        .brand, .date {
                            @include fontM($yellow, uppercase);
                            margin-bottom: 20rem;

                            @include desktop {
                                @include fontS($yellow, uppercase);
                            }

                            @include phablet {
                                @include fontXS($yellow, uppercase);
                            }
                        }

                        .description {
                            @include fontM($yellow);
                            margin-bottom: 20rem;

                            @include desktop {
                                @include fontS($yellow);
                            }

                            @include phablet {
                                @include fontXS($yellow);
                            }
                        }

                        small {
                            @include fontXS($yellow);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default ProjectItem;
