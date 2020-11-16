import React, { FC, useContext } from 'react';
import Image from 'next/image';
import TextsContext from './context/TextsContext';
import Title from './Title';

const SkillsBlock: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.skills} />
                    <ul>
                        <li>
                            <Image alt={texts.socialNetworkStrategy} height={160} layout="fixed" src="/images/icons/strategy.svg" width={160} />
                            <strong>{texts.socialNetworkStrategy}</strong>
                            <p>{texts.makingAuditsAndAnalysis}</p>
                        </li>
                        <li>
                            <Image alt={texts.socialNetworkConsulting} height={160} layout="fixed" src="/images/icons/phone.svg" width={160} />
                            <strong>{texts.socialNetworkConsulting}</strong>
                            <p>{texts.weCanHelpYourTeam}</p>
                        </li>
                        <li>
                            <Image alt={texts.communityManagement} height={160} layout="fixed" src="/images/icons/chat.svg" width={160} />
                            <strong>{texts.communityManagement}</strong>
                            <p>{texts.whenWeSendAMessage}</p>
                        </li>
                        <li>
                            <Image alt={texts.paidSocial} height={160} layout="fixed" src="/images/icons/money.svg" width={160} />
                            <strong>{texts.paidSocial}</strong>
                            <p>{texts.planningAndImplementing}</p>
                        </li>
                        <li>
                            <Image alt={texts.optimizationAndAnalysis} height={160} layout="fixed" src="/images/icons/graph.svg" width={160} />
                            <strong>{texts.optimizationAndAnalysis}</strong>
                            <p>{texts.measuringResults}</p>
                        </li>
                        <li>
                            <Image alt={texts.contentCreation} height={160} layout="fixed" src="/images/icons/camera.svg" width={160} />
                            <strong>{texts.contentCreation}</strong>
                            <p>{texts.createAttractiveContent}</p>
                        </li>
                    </ul>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $white;

                        ul {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 50rem 4%;

                            @include tablet {
                                grid-template-columns: repeat(2, 1fr);
                            }

                            li {
                                display: flex;
                                flex-direction: column;

                                strong {
                                    @include fontM($fontWeight: 500);
                                    letter-spacing: 5rem;
                                    margin: 40rem 0 15rem;
                                }

                                p {
                                    @include fontXS;
                                    letter-spacing: 1rem;
                                }
                            }
                        }
                    }

                `}
            </style>
        </>
    );
};

export default SkillsBlock;
