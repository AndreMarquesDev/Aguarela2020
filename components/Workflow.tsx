import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';
import Title from './Title';

const Workflow: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title text={texts.workflow} />

                    <ul>
                        <li>
                            <p>1.</p>
                            <p>{texts.defineTarget}</p>
                        </li>
                        <li>
                            <p>2.</p>
                            <p>{texts.defineGoals}</p>
                        </li>
                        <li>
                            <p>3.</p>
                            <p>{texts.platformStrategy}</p>
                        </li>
                        <li>
                            <p>4.</p>
                            <p>{texts.contentCreation}</p>
                        </li>
                        <li>
                            <p>5.</p>
                            <p>{texts.paidSocialAndInfluencers}</p>
                        </li>
                        <li>
                            <p>6.</p>
                            <p>{texts.insightsAndReports}</p>
                        </li>
                        <li>
                            <p>7.</p>
                            <p>{texts.optimization}</p>
                        </li>
                    </ul>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    $blockSize: 160rem;
                    $blockSizeMobile: 120rem;
                    $backfaceOffset: 12rem;

                    .container {
                        background: $purple;

                        ul {
                            display: flex;
                            justify-content: space-between;

                            @include wrapper {
                                width: 800rem;
                                flex-wrap: wrap;
                                justify-content: center;
                                margin: 0 auto;
                            }

                            @include phablet {
                                width: 600rem;
                            }

                            @include tablet {
                                width: 400rem;
                            }

                            @include mobile {
                                width: 280rem;
                                justify-content: space-between;
                            }

                            li {
                                width: $blockSize;
                                height: $blockSize;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                position: relative;
                                text-align: center;
                                padding: 10rem;
                                z-index: 0;

                                @include wrapper {
                                    margin: 0 calc(7rem + #{$backfaceOffset}) 0 7rem;

                                    &:first-child {
                                        margin-bottom: 50rem;
                                    }
                                }

                                @include phablet {
                                    &:nth-child(4) {
                                        margin-bottom: 50rem;
                                    }
                                }

                                @include tablet {
                                    &:nth-child(5) {
                                        margin-bottom: 50rem;
                                    }
                                }

                                @include mobile {
                                    width: $blockSizeMobile;
                                    height: $blockSizeMobile;
                                    margin: 0 ;
                                }

                                &:before, &:after {
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

                                p {
                                    @include fontXS($yellow, uppercase, bold);
                                    position: relative;
                                    display: block;
                                    z-index: 0;

                                    @include mobile {
                                        @include fontXXS($yellow, uppercase, bold);
                                    }
                                }
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Workflow;
