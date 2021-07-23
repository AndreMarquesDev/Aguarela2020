import React, { FC, useContext } from 'react';
import Image from 'next/image';
import Button from './Button';
import TextsContext from './context/TextsContext';
import Title from './Title/Title';
import { useWindowSize, desktopBreakpoint } from '../utils/useWindowSize';

const AboutMe: FC = () => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > desktopBreakpoint;

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.about} />
                    <div className="mainContentContainer">
                        <div className="imageBlock">
                            <Image
                                priority
                                alt="homepage banner"
                                height={650}
                                src="/images/about-me.jpg"
                                width={530}
                            />
                        </div>
                        <div className="textBlock">
                            <p className="bodyText">{texts.hiMyNameIs}</p>
                            <p className="bodyText">{texts.withMoreThan}</p>
                            <p className="bodyText">{texts.thesocialMediaCommunicationStrategy}</p>
                            <Button
                                alignLeft={isDesktop}
                                externalLink="https://www.instagram.com/catarinasantiago"
                            >
                                {texts.getToKnowMeBetter}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $white;

                        .mainContentContainer {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            @include desktop {
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
                                background: $pink;
                            }

                            @include desktop {
                                width: 45%;
                                margin-bottom: 50rem;
                            }

                            @include tablet {
                                width: 75%;
                            }

                            @include mobile {
                                width: 100%;
                            }
                        }

                        .textBlock {
                            width: 60%;

                            p {
                                text-align: left;
                            }

                            @include desktop {
                                width: 80%;

                                p {
                                    text-align: center;
                                }
                            }

                            @include tablet {
                                width: 100%;
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

export default AboutMe;
