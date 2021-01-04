import React, { FC, useContext } from 'react';
import Image from 'next/image';
import TextsContext from './context/TextsContext';

interface ProjectItemProps {
    imageSrc: string;
    imageAlt: string;
    brandLink: string;
    brandTag: string;
    year: number;
    isDesktop: boolean;
    isInPartnership?: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({ imageSrc, imageAlt, brandLink, brandTag, year, isDesktop, isInPartnership }) => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            {isDesktop ? (
                <li>
                    <Image
                        alt={imageAlt}
                        height={400}
                        src={imageSrc}
                        width={400}
                    />
                    <div className="backface">
                        <a className="brand link" href={brandLink} rel="noreferrer" target="_blank">{brandTag}</a>
                        <p className="description">{texts.socialMediaManagementAndContentCreation}</p>
                        <p className="date">
                            {texts.since}
                            {' '}
                            {year}
                        </p>
                        {isInPartnership && (
                            <small>
                                *
                                {' '}
                                {texts.inPartnershipWith}
                            </small>
                        )}
                    </div>
                </li>
            ) : (
                <div className="carouselItem">
                    <Image
                        alt={imageAlt}
                        height={400}
                        src={imageSrc}
                        width={400}
                    />
                    <div className="backface">
                        <a className="brand link" href={brandLink} rel="noreferrer" target="_blank">{brandTag}</a>
                        <p className="description">{texts.socialMediaManagementAndContentCreation}</p>
                        <p className="date">
                            {texts.since}
                            {' '}
                            {year}
                        </p>
                        {isInPartnership && (
                            <small>
                                *
                                {' '}
                                {texts.inPartnershipWith}
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
