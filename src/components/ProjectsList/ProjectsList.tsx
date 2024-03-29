import React, { useContext } from 'react';
import { TextsContext } from '../context/TextsContext';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';
import { NukaCarousel } from '../NukaCarousel/NukaCarousel';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import {
    projectsListNoCarouselDataTestId,
    projectsListSectionDataTestId,
} from '../../utils/dataTestIds';
import { tjelaInstagramUrl, kaffeehausInstagramUrl, guacamoleInstagramUrl } from '../../utils/urls';

export const ProjectsList = (): JSX.Element => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > Breakpoint.Tablet;
    const isMobile = windowSize.width < Breakpoint.Mobile;

    return (
        <>
            <section className="container" data-testid={projectsListSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.projects} />

                    {isDesktop ? (
                        <ul data-testid={projectsListNoCarouselDataTestId}>
                            <ProjectItem
                                isActive
                                isInPartnership
                                preloadImage
                                brandLink={tjelaInstagramUrl}
                                brandTag="@tudonatjela"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="a poke bowl"
                                imageSrc="/images/tjela.jpg"
                                isDesktop={isDesktop}
                                year={2020}
                            />
                            <ProjectItem
                                isActive
                                preloadImage
                                brandLink={kaffeehausInstagramUrl}
                                brandTag="@kaffeehaus_lisboa"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="coffee being poured into a mug"
                                imageSrc="/images/kaffeehaus.jpg"
                                isDesktop={isDesktop}
                                year={2018}
                            />
                            <ProjectItem
                                isActive
                                isInPartnership
                                preloadImage
                                brandLink={guacamoleInstagramUrl}
                                brandTag="@guacamolegmg"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="a burrito split in half"
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
                                preloadImage
                                brandLink={tjelaInstagramUrl}
                                brandTag="@tudonatjela"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="a poke bowl"
                                imageSrc="/images/tjela.jpg"
                                isDesktop={isDesktop}
                                year={2020}
                            />
                            <ProjectItem
                                isActive
                                preloadImage
                                brandLink={kaffeehausInstagramUrl}
                                brandTag="@kaffeehaus_lisboa"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="coffee being poured into a mug"
                                imageSrc="/images/kaffeehaus.jpg"
                                isDesktop={isDesktop}
                                year={2018}
                            />
                            <ProjectItem
                                isActive
                                isInPartnership
                                brandLink={guacamoleInstagramUrl}
                                brandTag="@guacamolegmg"
                                description={texts.socialMediaManagementAndContentCreation}
                                imageAlt="a burrito split in half"
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
                    .container {
                        background: var(--white);

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
