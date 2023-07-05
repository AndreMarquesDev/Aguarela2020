import React, { useContext } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { TextsContext } from '../context/TextsContext';
import { Title } from '../Title/Title';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';
import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { catarinaSantiagoInstagramUrl } from '../../utils/urls';
import { desktopMediaQuery, mobileMediaQuery, tabletMediaQuery } from '../../styles/mediaQueries';

export const AboutMe = (): JSX.Element => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Desktop;

    return (
        <>
            <section className="container" data-testid={aboutMeSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.about} />
                    <div className="mainContentContainer">
                        <div className="imageBlock">
                            <Image
                                priority
                                alt="a picture of me, Catarina"
                                height={650}
                                sizes={`(${desktopMediaQuery}) 45vw, (${tabletMediaQuery}) 75vw, (${mobileMediaQuery}) 100vw, 35vw`}
                                src="/images/about-me.jpg"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    position: 'relative',
                                }}
                                width={530}
                            />
                        </div>
                        <div className="textBlock">
                            <p className="bodyText">{texts.hiMyNameIs}</p>
                            <p className="bodyText">{texts.withMoreThan}</p>
                            <p className="bodyText">{texts.theSocialMediaCommunicationStrategy}</p>
                            <Button
                                alignLeft={isDesktop}
                                externalLink={catarinaSantiagoInstagramUrl}
                            >
                                {texts.getToKnowMeBetter}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .container {
                        background: var(--white);

                        .mainContentContainer {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            @media (${desktopMediaQuery}) {
                                flex-direction: column;
                                justify-content: center;
                            }
                        }

                        .imageBlock {
                            width: 35%;
                            position: relative;

                            &:before {
                                content: '';
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                top: 12rem;
                                left: 12rem;
                                background: var(--pink);
                            }

                            @media (${desktopMediaQuery}) {
                                width: 45%;
                                margin-bottom: 50rem;
                            }

                            @media (${tabletMediaQuery}) {
                                width: 75%;
                            }

                            @media (${mobileMediaQuery}) {
                                width: 100%;
                            }
                        }

                        .textBlock {
                            width: 60%;

                            p {
                                text-align: left;
                            }

                            @media (${desktopMediaQuery}) {
                                width: 80%;

                                p {
                                    text-align: center;
                                }
                            }

                            @media (${tabletMediaQuery}) {
                                width: 100%;
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};
