import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';
import Title from './Title';
import { mobileBreakpoint, tabletBreakpoint, useWindowSize } from '../utils/useWindowSize';
import NukaCarousel from './NukaCarousel';
import SkillItem from './SkillItem';

const SkillsBlock: FC = () => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > tabletBreakpoint;
    const isMobile = windowSize.width < mobileBreakpoint;

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.skills} />
                    {isDesktop ? (
                        <ul>
                            <li>
                                <SkillItem description={texts.makingAuditsAndAnalysis} icon="strategy" title={texts.socialMediaStrategy} />
                            </li>
                            <li>
                                <SkillItem description={texts.weCanHelpYourTeam} icon="phone" title={texts.socialMediaConsulting} />
                            </li>
                            <li>
                                <SkillItem description={texts.whenWeSendAMessage} icon="chat" title={texts.communityManagement} />
                            </li>
                            <li>
                                <SkillItem description={texts.planningAndImplementing} icon="money" title={texts.paidSocialAndSearch} />
                            </li>
                            <li>
                                <SkillItem description={texts.measuringResults} icon="graph" title={texts.optimizationAndAnalysis} />
                            </li>
                            <li>
                                <SkillItem description={texts.createAttractiveContent} icon="camera" title={texts.contentCreation} />
                            </li>
                        </ul>
                    ) : (
                        <NukaCarousel width={isMobile ? '100%' : '90%'}>
                            <div className="carouselItem">
                                <SkillItem description={texts.makingAuditsAndAnalysis} icon="strategy" title={texts.socialMediaStrategy} />
                            </div>
                            <div className="carouselItem">
                                <SkillItem description={texts.weCanHelpYourTeam} icon="phone" title={texts.socialMediaConsulting} />
                            </div>
                            <div className="carouselItem">
                                <SkillItem description={texts.whenWeSendAMessage} icon="chat" title={texts.communityManagement} />
                            </div>
                            <div className="carouselItem">
                                <SkillItem description={texts.planningAndImplementing} icon="money" title={texts.paidSocialAndSearch} />
                            </div>
                            <div className="carouselItem">
                                <SkillItem description={texts.measuringResults} icon="graph" title={texts.optimizationAndAnalysis} />
                            </div>
                            <div className="carouselItem">
                                <SkillItem description={texts.createAttractiveContent} icon="camera" title={texts.contentCreation} />
                            </div>
                        </NukaCarousel>
                    )}
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $white;

                        .wrapper {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }

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
                            }
                        }

                        .carouselItem {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            text-align: center;
                        }
                    }

                `}
            </style>
        </>
    );
};

export default SkillsBlock;
