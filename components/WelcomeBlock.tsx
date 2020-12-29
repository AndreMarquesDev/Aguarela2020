import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';

const WelcomeBlock: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <div className="titleBlock">
                        <strong>{texts.welcome1}</strong>
                        <strong>{texts.welcome2}</strong>
                        <strong>{texts.welcome3}</strong>
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
                                @include fontXXL($textTransform: uppercase, $fontWeight: 900);
                                letter-spacing: 30rem;
                                text-align: right;
                                -webkit-filter: drop-shadow(20rem -10rem 0 $pink);
                                filter: drop-shadow(20rem -10rem 0 $pink);
                                color: $blue;
                                background: $blue;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;

                                @include desktop {
                                    text-align: center;
                                }

                                @include mobile {
                                    @include fontXL($textTransform: uppercase, $fontWeight: 900);
                                    -webkit-filter: drop-shadow(10rem -5rem 0 $pink);
                                    filter: drop-shadow(10rem -5rem 0 $pink);
                                }
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
