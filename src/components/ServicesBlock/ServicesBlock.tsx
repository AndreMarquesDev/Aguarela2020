import React, { useContext } from 'react';
import { mobileMediaQuery } from '../../styles/mediaQueries';
import {
    servicesBlockItemCarouselDataTestId,
    servicesBlockItemWrapperDataTestId,
    servicesBlockSectionDataTestId,
} from '../../utils/dataTestIds';
import { Breakpoint, useWindowSize } from '../../utils/useWindowSize';
import { TextsContext } from '../context/TextsContext';
import { NukaCarousel } from '../NukaCarousel/NukaCarousel';
import { Title } from '../Title/Title';

export const ServicesBlock = (): JSX.Element => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Phablet;
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <>
            <section className="container" data-testid={servicesBlockSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.services} />

                    {isDesktop
                        ? (
                                <ul>
                                    <li data-testid={servicesBlockItemWrapperDataTestId}>
                                        <p className="fontL">{texts.design}</p>
                                        <div className="backface">
                                            <p className="fontXS">{`- ${texts.webDesign}`}</p>
                                            <p className="fontXS">{`- ${texts.outdoorsAndFlyers}`}</p>
                                            <p className="fontXS">{`- ${texts.contactCard}`}</p>
                                            <p className="fontXS">{`- ${texts.socialMediaTemplates}`}</p>
                                            <p className="fontXS">{`- ${texts.menus}`}</p>
                                        </div>
                                    </li>
                                    <li data-testid={servicesBlockItemWrapperDataTestId}>
                                        <p className="fontL">{texts.socialMediaEn}</p>
                                        <div className="backface">
                                            <p className="fontXS">{`- ${texts.contentCreation}`}</p>
                                            <p className="fontXS">{`- ${texts.marketAnalysis}`}</p>
                                            <p className="fontXS">{`- ${texts.socialMediaStrategyAndManagement}`}</p>
                                            <p className="fontXS">{`- ${texts.paidSocial}`}</p>
                                            <p className="fontXS">{`- ${texts.consulting}`}</p>
                                        </div>
                                    </li>
                                    <li data-testid={servicesBlockItemWrapperDataTestId}>
                                        <p className="fontL">{texts.digital}</p>
                                        <div className="backface">
                                            <p className="fontXS">{`- ${texts.paidSearchCampaigns}`}</p>
                                            <p className="fontXS">{`- ${texts.opinionPlatformsManagement}`}</p>
                                        </div>
                                    </li>
                                </ul>
                            )
                        : (
                                <NukaCarousel width={isMobile ? '100%' : '90%'}>
                                    <div
                                        className="carouselItem"
                                        data-testid={servicesBlockItemCarouselDataTestId}
                                    >
                                        <p className="fontL">{texts.design}</p>
                                        <div className="backface">
                                            <p className="fontXS">{`- ${texts.webDesign}`}</p>
                                            <p className="fontXS">{`- ${texts.outdoorsAndFlyers}`}</p>
                                            <p className="fontXS">{`- ${texts.contactCard}`}</p>
                                            <p className="fontXS">{`- ${texts.socialMediaTemplates}`}</p>
                                            <p className="fontXS">{`- ${texts.menus}`}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={servicesBlockItemCarouselDataTestId}
                                    >
                                        <p className="fontL">{texts.socialMediaEn}</p>
                                        <div className="backface">
                                            <p className="fontXS">{`- ${texts.contentCreation}`}</p>
                                            <p className="fontXS">{`- ${texts.marketAnalysis}`}</p>
                                            <p className="fontXS">{`- ${texts.socialMediaStrategyAndManagement}`}</p>
                                            <p className="fontXS">{`- ${texts.paidSocial}`}</p>
                                            <p className="fontXS">{`- ${texts.consulting}`}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={servicesBlockItemCarouselDataTestId}
                                    >
                                        <p className="fontL">{texts.digital}</p>
                                        <div className="backface">
                                            <p className="fontXS">{`- ${texts.paidSearchCampaigns}`}</p>
                                            <p className="fontXS">{`- ${texts.opinionPlatformsManagement}`}</p>
                                        </div>
                                    </div>
                                </NukaCarousel>
                            )}
                </div>
            </section>

            <style jsx>
                {`
                    .container {
                        --blockSize: 280rem;
                        --blockSizeMobile: 220rem;
                        --backfaceOffset: 12rem;

                        background: var(--white);

                        .wrapper {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }

                        ul {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                        }

                        li,
                        .carouselItem {
                            width: var(--blockSize);
                            height: var(--blockSize);
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            position: relative;
                            text-align: center;
                            margin: 0 auto;
                            padding: 10rem;
                            z-index: 0;

                            @media (${mobileMediaQuery}) {
                                width: var(--blockSizeMobile);
                                height: var(--blockSizeMobile);
                            }

                            &:before,
                            &:after {
                                content: '';
                                width: var(--blockSize);
                                height: var(--blockSize);
                                position: absolute;

                                @media (${mobileMediaQuery}) {
                                    width: var(--blockSizeMobile);
                                    height: var(--blockSizeMobile);
                                }
                            }

                            &:before {
                                top: 0;
                                left: 0;
                                background-color: var(--blue);
                            }

                            &:after {
                                top: var(--backfaceOffset);
                                left: var(--backfaceOffset);
                                background-color: var(--pink);
                                z-index: -1;
                            }

                            &:hover {
                                .backface {
                                    display: flex;
                                }

                                &:after {
                                    background-color: var(--blue);
                                }
                            }

                            p {
                                position: relative;
                                display: block;
                                z-index: 0;
                                color: var(--yellow);
                                text-transform: uppercase;
                                font-weight: bold;
                            }

                            .backface {
                                display: none;
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 0;
                                left: 50%;
                                transform: translateX(-50%);
                                flex-direction: column;
                                justify-content: center;
                                background: var(--pink);
                                padding: 10rem;

                                p {
                                    text-transform: none;
                                    font-weight: normal;
                                    margin-bottom: 5rem;
                                }
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};
