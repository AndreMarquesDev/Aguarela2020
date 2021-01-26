import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';
import Title from './Title';
import { useWindowSize, mobileBreakpoint, phabletBreakpoint } from '../utils/useWindowSize';
import NukaCarousel from './NukaCarousel';
import ProjectItem from './ProjectItem';

const ProjectsListDouble: FC = () => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isPhablet = windowSize.width < phabletBreakpoint;
    const isMobile = windowSize.width < mobileBreakpoint;
    // eslint-disable-next-line no-nested-ternary
    const slidesToShow = isMobile ? 1 : isPhablet ? 2 : 3;

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.projects} />

                    <NukaCarousel cellAlign="left" slidesToShow={slidesToShow} width={isMobile ? '100%' : '90%'}>
                        <div>
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                isInPartnership
                                brandLink="https://www.instagram.com/tudonatjela"
                                brandTag="@tudonatjela"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="tjela"
                                imageSrc="/images/tjela.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                isInPartnership
                                brandLink="https://www.instagram.com/tasteofindiapt"
                                brandTag="@tasteofindia"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="taste of india"
                                imageSrc="/images/taste-of-india.jpg"
                                year={2020}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/kaffeehaus_lisboa"
                                brandTag="@kaffeehaus_lisboa"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="kaffeehaus"
                                imageSrc="/images/kaffeehaus.jpg"
                                year={2018}
                            />
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                isInPartnership
                                brandLink="https://www.instagram.com/avocadohouselisbon"
                                brandTag="@avocadohouselisbon"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="avocado"
                                imageSrc="/images/avocado.jpg"
                                year={2020}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                isInPartnership
                                brandLink="https://www.instagram.com/guacamolegmg"
                                brandTag="@guacamolegmg"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="guacamole"
                                imageSrc="/images/guacamole.jpg"
                                year={2019}
                            />
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://industriacriativa.pt/projeto/45759/maria-limao-gestao-de-redes-sociais"
                                brandTag="@bebemarialimao"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="marialimao"
                                imageSrc="/images/maria-limao.jpg"
                                year="2019 - 2020"
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/biergarten.jardimdacerveja"
                                brandTag="@biergarten"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="biergarten"
                                imageSrc="/images/biergarten.jpg"
                                year={2019}
                            />
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                brandLink="https://industriacriativa.pt/projeto/14473/a-amiga-esteticista"
                                brandTag="@aamigaesteticista"
                                description={texts.consultingAndContentCreation}
                                imageAlt="a amiga esteticista"
                                imageSrc="/images/amiga-esteticista.jpg"
                                year={2017}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                brandLink="https://www.linkedin.com/company/harpoon-lda"
                                brandTag="@harpoonjobs"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="harpoon"
                                imageSrc="/images/harpoon.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/icecreamroll.pt"
                                brandTag="@icecreamroll.pt"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="icecream roll"
                                imageSrc="/images/ice-cream-roll.jpg"
                                year={2018}
                            />
                        </div>

                        <div>
                            <ProjectItem
                                isDesktop
                                isGrid
                                isInPartnership
                                brandLink="https://www.instagram.com/becomeluminouscoaching"
                                brandTag="@becomeluminous"
                                description={texts.socialMediaAndPaidSocial}
                                imageAlt="luminous"
                                imageSrc="/images/luminous.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/madmarycuisine"
                                brandTag="@madmarycuisine"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="mad mary"
                                imageSrc="/images/mad-mary.jpg"
                                year={2019}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/bovinelisboa"
                                brandTag="@bovinelisboa"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="bovine"
                                imageSrc="/images/bovine.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/catarinasantiago"
                                brandTag="@catarinasantiago"
                                description={texts.contentCreation}
                                imageAlt="catarina santiago"
                                imageSrc="/images/content-creator.jpg"
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isDesktop
                                isGrid
                                brandLink="https://instagram.com/4patasde5estrelas"
                                brandTag="@4patasde5estrelas"
                                description={texts.socialMediaManagement}
                                imageAlt="4 patas de 5 estrelas"
                                imageSrc="/images/4patas5estrelas.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/ricemerestaurante"
                                brandTag="@ricemerestaurante"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="rice me"
                                imageSrc="/images/rice-me.jpg"
                                year={2020}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://www.instagram.com/ricemedeli"
                                brandTag="@ricemedeli"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="rice me deli"
                                imageSrc="/images/rice-me-deli.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isDesktop
                                isGrid
                                brandLink="https://industriacriativa.pt/projeto/45758/anaro-artist-content-creation"
                                brandTag="@anaro.artistpage"
                                description={texts.consultingAndContentCreation}
                                imageAlt="AnaRo"
                                imageSrc="/images/anaro.jpg"
                                year={2019}
                            />
                        </div>
                    </NukaCarousel>
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
                    }

                `}
            </style>
        </>
    );
};

export default ProjectsListDouble;
