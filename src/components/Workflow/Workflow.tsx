import React, { useContext } from 'react';
import { workflowSectionDataTestId } from '../../utils/dataTestIds';
import { TextsContext } from '../context/TextsContext';
import { Title } from '../Title/Title';
import {
    mobileMediaQuery,
    phabletMediaQuery,
    tabletMediaQuery,
    wrapperMediaQuery,
} from '../../styles/mediaQueries';

export const Workflow = (): JSX.Element => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container" data-testid={workflowSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title text={texts.workflow} />

                    <ul>
                        <li className="fontXS">
                            <p>1.</p>
                            <p>{texts.defineTarget}</p>
                            <div className="backface">
                                <p>{texts.whatIsTheTarget}</p>
                            </div>
                        </li>
                        <li className="fontXS">
                            <p>2.</p>
                            <p>{texts.defineGoals}</p>
                            <div className="backface">
                                <p>{texts.whatAreYourGoals}</p>
                            </div>
                        </li>
                        <li className="fontXS">
                            <p>3.</p>
                            <p>{texts.platformStrategy}</p>
                            <div className="backface">
                                <p>{texts.whatPlatforms}</p>
                            </div>
                        </li>
                        <li className="fontXS">
                            <p>4.</p>
                            <p>{texts.contentCreation}</p>
                            <div className="backface">
                                <p>{texts.relevantContentCreation}</p>
                            </div>
                        </li>
                        <li className="fontXS">
                            <p>5.</p>
                            <p>{texts.paidSocialAndInfluencers}</p>
                            <div className="backface">
                                <p>{texts.promotePostsAndCollaborate}</p>
                            </div>
                        </li>
                        <li className="fontXS">
                            <p>6.</p>
                            <p>{texts.insightsAndReports}</p>
                            <div className="backface">
                                <p>{texts.detailedAnalysis}</p>
                            </div>
                        </li>
                        <li className="fontXS">
                            <p>7.</p>
                            <p>{texts.optimization}</p>
                            <div className="backface">
                                <p>{texts.improvementsAndUpdatesToTheStrategy}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <style jsx>
                {`
                    .container {
                        --blockSize: 160rem;
                        --blockSizeMobile: 120rem;
                        --backfaceOffset: 12rem;

                        background: var(--purple);

                        ul {
                            display: flex;
                            justify-content: space-between;

                            @media (${wrapperMediaQuery}) {
                                width: 800rem;
                                flex-wrap: wrap;
                                justify-content: center;
                                margin: 0 auto;
                            }

                            @media (${phabletMediaQuery}) {
                                width: 600rem;
                            }

                            @media (${tabletMediaQuery}) {
                                width: 400rem;
                            }

                            @media (${mobileMediaQuery}) {
                                width: 280rem;
                                justify-content: space-between;
                            }

                            li {
                                width: var(--blockSize);
                                height: var(--blockSize);
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                position: relative;
                                text-align: center;
                                padding: 10rem;
                                z-index: 0;

                                @media (${wrapperMediaQuery}) {
                                    margin: 0 calc(7rem + var(--backfaceOffset)) 0 7rem;

                                    &:first-child {
                                        margin-bottom: 50rem;
                                    }
                                }

                                @media (${phabletMediaQuery}) {
                                    &:nth-child(4) {
                                        margin-bottom: 50rem;
                                    }
                                }

                                @media (${tabletMediaQuery}) {
                                    &:nth-child(5) {
                                        margin-bottom: 50rem;
                                    }
                                }

                                @media (${mobileMediaQuery}) {
                                    width: var(--blockSizeMobile);
                                    height: var(--blockSizeMobile);
                                    margin: 0;
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
                                    color: var(--yellow);
                                    font-weight: bold;
                                    text-transform: uppercase;
                                    position: relative;
                                    display: block;
                                    z-index: 0;

                                    @media (${mobileMediaQuery}) {
                                        font-size: var(--fontSizeXXS);
                                    }
                                }

                                .backface {
                                    display: none;
                                    width: 100%;
                                    height: 100%;
                                    position: absolute;
                                    top: 0;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    align-items: center;
                                    background: var(--pink);
                                    padding: 10rem;

                                    p {
                                        color: var(--yellow);
                                        font-weight: normal;
                                        text-transform: none;

                                        @media (${mobileMediaQuery}) {
                                            font-size: var(--fontSizeXXS);
                                        }
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
