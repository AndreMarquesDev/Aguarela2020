import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';
import Title from './Title/Title';
import Button from './Button';
import { useWindowSize, tabletBreakpoint, mobileBreakpoint } from '../utils/useWindowSize';
import NukaCarousel from './NukaCarousel';
import ProjectItem from './ProjectItem';

const ProjectsList: FC = () => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > tabletBreakpoint;
    const isMobile = windowSize.width < mobileBreakpoint;

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.projects} />

                    {isDesktop ? (
                        <ul>
                            <ProjectItem
                                isActive
                                isInPartnership
                                brandLink="https://www.instagram.com/tudonatjela"
                                brandTag="@tudonatjela"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="tjela logo"
                                imageSrc="/images/tjela.jpg"
                                isDesktop={isDesktop}
                                year={2020}
                            />
                            <ProjectItem
                                isActive
                                brandLink="https://www.instagram.com/kaffeehaus_lisboa"
                                brandTag="@kaffeehaus_lisboa"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="kaffeehaus logo"
                                imageSrc="/images/kaffeehaus.jpg"
                                isDesktop={isDesktop}
                                year={2018}
                            />
                            <ProjectItem
                                isActive
                                isInPartnership
                                brandLink="https://www.instagram.com/guacamolegmg"
                                brandTag="@guacamolegmg"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="guacamole logo"
                                imageSrc="/images/guacamole.jpg"
                                isDesktop={isDesktop}
                                year={2019}
                            />
                        </ul>
                    ) : (
                        <NukaCarousel width={isMobile ? '100%' : '90%'}>
                            <ProjectItem
                                isActive
                                isInPartnership
                                brandLink="https://www.instagram.com/tudonatjela"
                                brandTag="@tudonatjela"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="tjela logo"
                                imageSrc="/images/tjela.jpg"
                                isDesktop={isDesktop}
                                year={2020}
                            />
                            <ProjectItem
                                isActive
                                brandLink="https://www.instagram.com/kaffeehaus_lisboa"
                                brandTag="@kaffeehaus_lisboa"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="kaffeehaus logo"
                                imageSrc="/images/kaffeehaus.jpg"
                                isDesktop={isDesktop}
                                year={2018}
                            />
                            <ProjectItem
                                isActive
                                isInPartnership
                                brandLink="https://www.instagram.com/guacamolegmg"
                                brandTag="@guacamolegmg"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="guacamole logo"
                                imageSrc="/images/guacamole.jpg"
                                isDesktop={isDesktop}
                                year={2019}
                            />
                        </NukaCarousel>
                    )}

                    <Button page="projects">{texts.seeMore}</Button>
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
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default ProjectsList;
