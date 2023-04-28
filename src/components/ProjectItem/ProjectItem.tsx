import React, { useContext, TouchEvent } from 'react';
import Image from 'next/image';
import { isClientSide } from 'multilingual-url/lib';
import classNames from 'classnames';
import { TextsContext } from '../context/TextsContext';
import { resetTimesTouchedAttribute } from '../../utils/generic';
import { projectItemTouchDivDataTestId } from '../../utils/dataTestIds';

export interface ProjectItemProps {
    imageSrc: string;
    imageAlt: string;
    brandLink: string;
    brandTag: string;
    description: string;
    isDesktop?: boolean;
    year?: number | string;
    isInPartnership?: boolean;
    isActive?: boolean;
    isGrid?: boolean;
    preloadImage?: boolean;
}

export const ProjectItem = ({
    imageSrc,
    imageAlt,
    brandLink,
    brandTag,
    description,
    year,
    isDesktop,
    isInPartnership,
    isActive,
    isGrid,
    preloadImage,
}: ProjectItemProps): JSX.Element => {
    const { texts } = useContext(TextsContext);

    const isTouch = isClientSide && window?.matchMedia('(hover: none), (pointer: coarse)').matches;

    const handleTouch = (event: TouchEvent<HTMLElement>): void => {
        const target = event.currentTarget;
        const timesTouched = parseInt(target.dataset.timesTouched as string);

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
                <li>
                    <Image
                        alt={imageAlt}
                        height={400}
                        priority={!!preloadImage}
                        src={imageSrc}
                        width={400}
                    />
                    <div className="backface">
                        <a className="brand link" href={brandLink} rel="noreferrer" target="_blank">
                            {brandTag}
                        </a>
                        <p className="description">{description}</p>
                        {year && (
                            <p className="date">
                                {year}
                                {isActive && ` - ${texts.present}`}
                            </p>
                        )}
                        {isInPartnership && <small>* {texts.inPartnershipWith}</small>}
                    </div>
                </li>
            ) : (
                <div
                    className={classNames('carouselItem', isTouch && 'touch', isGrid && 'grid')}
                    data-testid={`${projectItemTouchDivDataTestId}_${imageAlt}`}
                    data-times-touched={0}
                    onTouchStart={handleTouch}
                >
                    <Image
                        alt={imageAlt}
                        height={400}
                        priority={!!preloadImage}
                        src={imageSrc}
                        width={400}
                    />
                    <div className="backface">
                        <a className="brand link" href={brandLink} rel="noreferrer" target="_blank">
                            {brandTag}
                        </a>
                        <p className="description">{description}</p>
                        {year && (
                            <p className="date">
                                {year}
                                {isActive && ` - ${texts.present}`}
                            </p>
                        )}
                        {isInPartnership && <small>* {texts.inPartnershipWith}</small>}
                    </div>
                </div>
            )}

            <style jsx>
                {`
                    @import './src/styles/_vars.scss';

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
                    }

                    .carouselItem {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        position: relative;

                        &:hover {
                            .backface {
                                display: flex;
                            }
                        }

                        &.grid {
                            margin: 0 4% 0;

                            @include tablet {
                                margin: 0 2% 0;
                            }

                            .backface {
                                .brand {
                                    @include fontXS($yellow, uppercase);

                                    @include tablet {
                                        @include fontXXS($yellow, uppercase);
                                    }
                                }

                                .date {
                                    @include fontXS($yellow);

                                    @include tablet {
                                        @include fontXXS($yellow);
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

                        .brand {
                            @include fontXS($yellow, uppercase);
                            margin-bottom: 20rem;
                        }

                        .date {
                            @include fontXS($yellow);
                            margin-bottom: 20rem;
                        }

                        .description {
                            @include fontS($yellow);
                            margin-bottom: 20rem;

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
