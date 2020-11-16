import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';

const WelcomeBlock: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <div className="titleBlock">
                        <strong>Bem</strong>
                        <strong>Vin</strong>
                        <strong>Dos</strong>
                    </div>
                    <div className="textBlock">
                        <p
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                                __html: texts.managingSocialNetworks,
                            }}
                            className="bodyText"
                        />
                        <p className="bodyText">{texts.monitorAndOptimizeProcessAndStrategy}</p>
                        <p className="bodyText">{texts.throughStrategicPlanning}</p>
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
                        }

                        .titleBlock {
                            width: 35%;

                            strong {
                                display: block;
                                @include fontXL($textTransform: uppercase, $fontWeight: 900);
                                letter-spacing: 30rem;
                                line-height: 140rem;
                                text-align: right;
                                -webkit-filter: drop-shadow(20rem -10rem 0 $pink);
                                filter: drop-shadow(20rem -10rem 0 $pink);
                                color: $blue;
                                background: $blue;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            }
                        }

                        .textBlock {
                            width: 60%;

                            p {
                                @include fontM($white);
                                margin-bottom: 50rem;

                                &:last-child {
                                    margin-bottom: 0;
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
