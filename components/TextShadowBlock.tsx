import React, { FC } from 'react';
import { useWindowSize, mobileBreakpoint, desktopBreakpoint } from '../utils/useWindowSize';
import Button from './Button';

interface TextShadowBlockProps {
    title1: string;
    title2: string;
    title3: string;
    titleMobile: string;
    textBlock1: string;
    textBlock2: string;
    textBlock3: string;
    hasButton?: boolean;
}

const TextShadowBlock: FC<TextShadowBlockProps> = ({ title1, title2, title3, titleMobile, textBlock1, textBlock2, textBlock3, hasButton }) => {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > desktopBreakpoint;
    const isMobile = windowSize.width < mobileBreakpoint;

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <div className="titleBlock">
                        {isMobile ? (
                            <p>{titleMobile}</p>
                        ) : (
                            <>
                                <strong>{title1}</strong>
                                <strong>{title2}</strong>
                                <strong>{title3}</strong>
                            </>
                        )}
                    </div>
                    <div className="textBlock">
                        <p
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                                __html: textBlock1,
                            }}
                            className="bodyText bodyText--white"
                        />
                        <p className="bodyText bodyText--white">{textBlock2}</p>
                        <p className="bodyText bodyText--white">{textBlock3}</p>
                        {hasButton && <Button isUppercased alignLeft={isDesktop} externalLink="mailto:catarina@aguareladigital.pt">catarina@aguareladigital.pt</Button>}
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $purple;

                        .wrapper {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            overflow: hidden;

                            @include desktop {
                                flex-direction: column;
                                justify-content: center;
                            }
                        }

                        .titleBlock {
                            width: 35%;

                            @include desktop {
                                width: 100%;
                                margin-bottom: 50rem;
                            }

                            strong {
                                display: block;
                                @include fontXXL($blue, uppercase, 900);
                                letter-spacing: 30rem;
                                text-align: right;
                                -webkit-filter: drop-shadow(20rem -10rem 0 $pink);
                                filter: drop-shadow(20rem -10rem 0 $pink);
                                background: $blue;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                text-align: center;
                            }

                            p {
                                @include fontL($blue, uppercase, 900);
                                letter-spacing: 5rem;
                                text-align: center;
                                -webkit-filter: drop-shadow(5rem -2.5rem 0 $pink);
                                filter: drop-shadow(5rem -2.5rem 0 $pink);
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

export default TextShadowBlock;
