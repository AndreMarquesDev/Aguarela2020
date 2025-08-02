import React, { useContext } from 'react';
import { tabletMediaQuery } from '../../styles/mediaQueries';
import {
    skillsBlockItemCarouselDataTestId,
    skillsBlockItemWrapperDataTestId,
    skillsBlockSectionDataTestId,
} from '../../utils/dataTestIds';
import { Breakpoint, useWindowSize } from '../../utils/useWindowSize';
import { TextsContext } from '../context/TextsContext';
import { NukaCarousel } from '../NukaCarousel/NukaCarousel';
import { SkillItem } from '../SkillItem/SkillItem';
import { Title } from '../Title/Title';

export const SkillsBlock = (): JSX.Element => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Tablet;
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <>
            <section className="container" data-testid={skillsBlockSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.skills} />
                    {isDesktop
                        ? (
                                <ul>
                                    <li data-testid={skillsBlockItemWrapperDataTestId}>
                                        <SkillItem
                                            description={texts.makingAuditsAndAnalysis}
                                            icon="strategy"
                                            title={texts.socialMediaStrategy}
                                        />
                                    </li>
                                    <li data-testid={skillsBlockItemWrapperDataTestId}>
                                        <SkillItem
                                            description={texts.weCanHelpYourTeam}
                                            icon="phone"
                                            title={texts.socialMediaConsulting}
                                        />
                                    </li>
                                    <li data-testid={skillsBlockItemWrapperDataTestId}>
                                        <SkillItem
                                            description={texts.whenWeSendAMessage}
                                            icon="chat"
                                            title={texts.communityManagement}
                                        />
                                    </li>
                                    <li data-testid={skillsBlockItemWrapperDataTestId}>
                                        <SkillItem
                                            description={texts.planningAndImplementing}
                                            icon="money"
                                            title={texts.paidSocialAndSearch}
                                        />
                                    </li>
                                    <li data-testid={skillsBlockItemWrapperDataTestId}>
                                        <SkillItem
                                            description={texts.measuringResults}
                                            icon="graph"
                                            title={texts.optimizationAndAnalysis}
                                        />
                                    </li>
                                    <li data-testid={skillsBlockItemWrapperDataTestId}>
                                        <SkillItem
                                            description={texts.createAttractiveContent}
                                            icon="camera"
                                            title={texts.contentCreation}
                                        />
                                    </li>
                                </ul>
                            )
                        : (
                                <NukaCarousel width={isMobile ? '100%' : '90%'}>
                                    <div
                                        className="carouselItem"
                                        data-testid={skillsBlockItemCarouselDataTestId}
                                    >
                                        <SkillItem
                                            description={texts.makingAuditsAndAnalysis}
                                            icon="strategy"
                                            title={texts.socialMediaStrategy}
                                        />
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={skillsBlockItemCarouselDataTestId}
                                    >
                                        <SkillItem
                                            description={texts.weCanHelpYourTeam}
                                            icon="phone"
                                            title={texts.socialMediaConsulting}
                                        />
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={skillsBlockItemCarouselDataTestId}
                                    >
                                        <SkillItem
                                            description={texts.whenWeSendAMessage}
                                            icon="chat"
                                            title={texts.communityManagement}
                                        />
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={skillsBlockItemCarouselDataTestId}
                                    >
                                        <SkillItem
                                            description={texts.planningAndImplementing}
                                            icon="money"
                                            title={texts.paidSocialAndSearch}
                                        />
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={skillsBlockItemCarouselDataTestId}
                                    >
                                        <SkillItem
                                            description={texts.measuringResults}
                                            icon="graph"
                                            title={texts.optimizationAndAnalysis}
                                        />
                                    </div>
                                    <div
                                        className="carouselItem"
                                        data-testid={skillsBlockItemCarouselDataTestId}
                                    >
                                        <SkillItem
                                            description={texts.createAttractiveContent}
                                            icon="camera"
                                            title={texts.contentCreation}
                                        />
                                    </div>
                                </NukaCarousel>
                            )}
                </div>
            </section>

            <style jsx>
                {`
                    .container {
                        background: var(--white);

                        .wrapper {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }

                        ul {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 50rem 4%;

                            @media (${tabletMediaQuery}) {
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
