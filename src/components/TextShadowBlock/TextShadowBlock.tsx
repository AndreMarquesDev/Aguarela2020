import React from 'react';
import { textBlock1DataTestId } from '../../utils/dataTestIds';
import { aguarelaDigitalEmail } from '../../utils/urls';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';
import { Button } from '../Button/Button';
import { desktopMediaQuery, tabletMediaQuery } from '../../styles/mediaQueries';

export interface TextShadowBlockProps {
    title1: string;
    title2: string;
    title3: string;
    titleMobile: string;
    textBlock1: string;
    textBlock2: string;
    textBlock3: string;
    dataTestId: string;
    hasButton?: boolean;
}

export const TextShadowBlock = ({
    title1,
    title2,
    title3,
    titleMobile,
    textBlock1,
    textBlock2,
    textBlock3,
    dataTestId,
    hasButton,
}: TextShadowBlockProps): JSX.Element => {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Desktop;
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <>
            <section className="container" data-testid={dataTestId}>
                <div className="wrapper genericMargins">
                    <div className="titleBlock">
                        {isMobile ? (
                            <p className="fontL">{titleMobile}</p>
                        ) : (
                            <>
                                <strong className="fontXXL">{title1}</strong>
                                <strong className="fontXXL">{title2}</strong>
                                <strong className="fontXXL">{title3}</strong>
                            </>
                        )}
                    </div>
                    <div className="textBlock">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: textBlock1,
                            }}
                            className="bodyText bodyText--white"
                            data-testid={textBlock1DataTestId}
                        />
                        <p className="bodyText bodyText--white">{textBlock2}</p>
                        <p className="bodyText bodyText--white">{textBlock3}</p>
                        {hasButton && (
                            <Button
                                isLowercased
                                alignLeft={isDesktop}
                                externalLink={`mailto:${aguarelaDigitalEmail}`}
                            >
                                {aguarelaDigitalEmail}
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    .container {
                        background: var(--purple);

                        .wrapper {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            overflow: hidden;

                            @media (${desktopMediaQuery}) {
                                flex-direction: column;
                                justify-content: center;
                            }
                        }

                        .titleBlock {
                            width: 35%;

                            @media (${desktopMediaQuery}) {
                                width: 100%;
                                margin-bottom: 50rem;
                            }

                            strong {
                                display: block;
                                color: var(--blue);
                                text-transform: uppercase;
                                font-weight: 900;
                                letter-spacing: 30rem;
                                text-align: right;
                                -webkit-filter: drop-shadow(20rem -10rem 0 var(--pink));
                                filter: drop-shadow(20rem -10rem 0 var(--pink));
                                background: var(--blue);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                text-align: center;
                            }

                            p {
                                color: var(--blue);
                                text-transform: uppercase;
                                font-weight: 900;
                                letter-spacing: 5rem;
                                text-align: center;
                                -webkit-filter: drop-shadow(5rem -2.5rem 0 var(--pink));
                                filter: drop-shadow(5rem -2.5rem 0 var(--pink));
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
