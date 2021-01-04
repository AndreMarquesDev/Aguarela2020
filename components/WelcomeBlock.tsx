import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import { Locale } from '../utils/locales';
import { useWindowSize, mobileBreakpoint } from '../utils/useWindowSize';
import TextsContext from './context/TextsContext';

const WelcomeBlock: FC = () => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < mobileBreakpoint;

    const {
        query,
    } = useRouter();
    const currentLanguage = query.language?.toString() as Locale;
    const titleMobile = currentLanguage === 'pt' ? `${texts.welcome1}-${texts.welcome2}${texts.welcome3}` : `${texts.welcome1}${texts.welcome2}${texts.welcome3}`;

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <div className="titleBlock">
                        {isMobile ? (
                            <p>{titleMobile}</p>
                        ) : (
                            <>
                                <strong>{texts.welcome1}</strong>
                                <strong>{texts.welcome2}</strong>
                                <strong>{texts.welcome3}</strong>
                            </>
                        )}
                    </div>
                    <div className="textBlock">
                        <p
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                                __html: texts.managingsocialMedia,
                            }}
                            className="bodyText bodyText--white"
                        />
                        <p className="bodyText bodyText--white">{texts.monitorAndOptimizeProcessAndStrategy}</p>
                        <p className="bodyText bodyText--white">{texts.throughStrategicPlanning}</p>
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

                                @include desktop {
                                    text-align: center;
                                }
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

                            @include desktop {
                                width: 80%;
                            }

                            @include tablet {
                                width: 100%;
                            }

                            p {
                                @include mobile {
                                    @include fontS($white);
                                }
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

export default WelcomeBlock;
