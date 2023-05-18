import React, { useContext, TouchEvent } from 'react';
import Image from 'next/image';
import { isClientSide } from 'multilingual-url/lib';
import classNames from 'classnames';
import { TextsContext } from '../context/TextsContext';
import { resetTimesTouchedAttribute } from '../../utils/generic';
import { projectItemTouchDivDataTestId } from '../../utils/dataTestIds';
import { desktopMediaQuery, phabletMediaQuery, tabletMediaQuery } from '../../styles/mediaQueries';

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

    const imageSize = 400;
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
                        height={imageSize}
                        priority={!!preloadImage}
                        src={imageSrc}
                        style={{
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                            maxWidth: `${imageSize}px`,
                        }}
                        width={imageSize}
                    />
                    <div className="backface">
                        <a
                            className="brand link fontXS"
                            href={brandLink}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {brandTag}
                        </a>
                        <p className="description fontS">{description}</p>
                        {year && (
                            <p className="date fontXS">
                                {year}
                                {isActive && ` - ${texts.present}`}
                            </p>
                        )}
                        {isInPartnership && (
                            <small className="fontXS">* {texts.inPartnershipWith}</small>
                        )}
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
                        height={imageSize}
                        priority={!!preloadImage}
                        src={imageSrc}
                        style={{
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                            maxWidth: `${imageSize}px`,
                        }}
                        width={imageSize}
                    />
                    <div className="backface">
                        <a
                            className="brand link fontXS"
                            href={brandLink}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {brandTag}
                        </a>
                        <p className="description fontS">{description}</p>
                        {year && (
                            <p className="date fontXS">
                                {year}
                                {isActive && ` - ${texts.present}`}
                            </p>
                        )}
                        {isInPartnership && (
                            <small className="fontXS">* {texts.inPartnershipWith}</small>
                        )}
                    </div>
                </div>
            )}

            <style jsx>
                {`
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
                        max-width: 400rem;
                        max-height: 400rem;
                        width: auto;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        position: relative;
                        margin: 0 auto;

                        &:hover {
                            .backface {
                                display: flex;
                            }
                        }

                        &.grid {
                            margin: 0 4% 0;

                            @media (${tabletMediaQuery}) {
                                margin: 0 2% 0;
                            }

                            .backface {
                                .brand {
                                    color: var(--yellow);
                                    text-transform: uppercase;

                                    @media (${tabletMediaQuery}) {
                                        font-size: var(--fontSizeXXS);
                                    }
                                }

                                .date {
                                    color: var(--yellow);

                                    @media (${tabletMediaQuery}) {
                                        font-size: var(--fontSizeXXS);
                                    }
                                }

                                .description {
                                    color: var(--yellow);

                                    @media (${desktopMediaQuery}) {
                                        font-size: var(--fontSizeXS);
                                    }

                                    @media (${tabletMediaQuery}) {
                                        font-size: var(--fontSizeXXS);
                                    }
                                }

                                small {
                                    color: var(--yellow);

                                    @media (${tabletMediaQuery}) {
                                        font-size: var(--fontSizeXXS);
                                    }
                                }
                            }
                        }
                    }

                    .backface {
                        display: none;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        background: var(--blue);
                        padding: 10rem;

                        .brand {
                            color: var(--yellow);
                            text-transform: uppercase;
                            margin-bottom: 20rem;
                        }

                        .date {
                            color: var(--yellow);
                            margin-bottom: 20rem;
                        }

                        .description {
                            color: var(--yellow);
                            margin-bottom: 20rem;

                            @media (${phabletMediaQuery}) {
                                font-size: var(--fontSizeXS);
                            }
                        }

                        small {
                            color: var(--yellow);
                        }
                    }
                `}
            </style>
        </>
    );
};
