import React, { FC, useContext } from 'react';
import {
    servicesBlockItemWrapperDataTestId,
    servicesBlockItemCarouselDataTestId,
    servicesBlockSectionDataTestId,
} from '../../utils/dataTestIds';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';
import TextsContext from '../context/TextsContext';
import { NukaCarousel } from '../NukaCarousel/NukaCarousel';
import Title from '../Title/Title';

export const ServicesBlock: FC = () => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Phablet;
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <>
            <section className="container" data-testid={servicesBlockSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.services} />

                    {isDesktop ? (
                        <ul>
                            <li data-testid={servicesBlockItemWrapperDataTestId}>
                                <p>{texts.design}</p>
                                <div className="backface">
                                    <p>{`- ${texts.webDesign}`}</p>
                                    <p>{`- ${texts.outdoorsAndFlyers}`}</p>
                                    <p>{`- ${texts.contactCard}`}</p>
                                    <p>{`- ${texts.socialMediaTemplates}`}</p>
                                    <p>{`- ${texts.menus}`}</p>
                                </div>
                            </li>
                            <li data-testid={servicesBlockItemWrapperDataTestId}>
                                <p>{texts.socialMediaEn}</p>
                                <div className="backface">
                                    <p>{`- ${texts.contentCreation}`}</p>
                                    <p>{`- ${texts.marketAnalysis}`}</p>
                                    <p>{`- ${texts.socialMediaStrategyAndManagement}`}</p>
                                    <p>{`- ${texts.paidSocial}`}</p>
                                    <p>{`- ${texts.consulting}`}</p>
                                </div>
                            </li>
                            <li data-testid={servicesBlockItemWrapperDataTestId}>
                                <p>{texts.digital}</p>
                                <div className="backface">
                                    <p>{`- ${texts.paidSearchCampaigns}`}</p>
                                    <p>{`- ${texts.opinionPlatformsManagement}`}</p>
                                </div>
                            </li>
                        </ul>
                    ) : (
                        <NukaCarousel framePadding="0px 10px" width={isMobile ? '100%' : '90%'}>
                            <div
                                className="carouselItem"
                                data-testid={servicesBlockItemCarouselDataTestId}
                            >
                                <p>{texts.design}</p>
                                <div className="backface">
                                    <p>{`- ${texts.webDesign}`}</p>
                                    <p>{`- ${texts.outdoorsAndFlyers}`}</p>
                                    <p>{`- ${texts.contactCard}`}</p>
                                    <p>{`- ${texts.socialMediaTemplates}`}</p>
                                    <p>{`- ${texts.menus}`}</p>
                                </div>
                            </div>
                            <div
                                className="carouselItem"
                                data-testid={servicesBlockItemCarouselDataTestId}
                            >
                                <p>{texts.socialMediaEn}</p>
                                <div className="backface">
                                    <p>{`- ${texts.contentCreation}`}</p>
                                    <p>{`- ${texts.marketAnalysis}`}</p>
                                    <p>{`- ${texts.socialMediaStrategyAndManagement}`}</p>
                                    <p>{`- ${texts.paidSocial}`}</p>
                                    <p>{`- ${texts.consulting}`}</p>
                                </div>
                            </div>
                            <div
                                className="carouselItem"
                                data-testid={servicesBlockItemCarouselDataTestId}
                            >
                                <p>{texts.digital}</p>
                                <div className="backface">
                                    <p>{`- ${texts.paidSearchCampaigns}`}</p>
                                    <p>{`- ${texts.opinionPlatformsManagement}`}</p>
                                </div>
                            </div>
                        </NukaCarousel>
                    )}
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    $blockSize: 280rem;
                    $blockSizeMobile: 220rem;
                    $backfaceOffset: 12rem;

                    .container {
                        background: $white;

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
                            width: $blockSize;
                            height: $blockSize;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            position: relative;
                            text-align: center;
                            margin: 0 auto;
                            padding: 10rem;
                            z-index: 0;

                            @include mobile {
                                width: $blockSizeMobile;
                                height: $blockSizeMobile;
                            }

                            &:before,
                            &:after {
                                content: '';
                                width: $blockSize;
                                height: $blockSize;
                                position: absolute;

                                @include mobile {
                                    width: $blockSizeMobile;
                                    height: $blockSizeMobile;
                                }
                            }

                            &:before {
                                top: 0;
                                left: 0;
                                background-color: $blue;
                            }

                            &:after {
                                top: $backfaceOffset;
                                left: $backfaceOffset;
                                background-color: $pink;
                                z-index: -1;
                            }

                            &:hover {
                                .backface {
                                    display: flex;
                                }

                                &:after {
                                    background-color: $blue;
                                }
                            }

                            p {
                                @include fontL($yellow, uppercase, bold);
                                position: relative;
                                display: block;
                                z-index: 0;
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
                                background: $pink;
                                padding: 10rem;

                                p {
                                    @include fontXS($yellow);
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
