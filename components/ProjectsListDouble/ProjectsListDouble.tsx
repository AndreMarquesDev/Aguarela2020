import React, { useContext } from 'react';
import { TextsContext } from '../context/TextsContext';
import { Title } from '../Title/Title';
import { useWindowSize, Breakpoint } from '../../utils/useWindowSize';
import { NukaCarousel } from '../NukaCarousel/NukaCarousel';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { projectsListDoubleSectionDataTestId } from '../../utils/dataTestIds';
import {
    aAmigaEsteticistaIndustriaCriativaUrl,
    anaroIndustriaCriativaUrl,
    avocadoInstagramUrl,
    beefeaterWebsiteUrl,
    biergartenInstagramUrl,
    bovineInstagramUrl,
    catarinaSantiagoInstagramUrl,
    guacamoleInstagramUrl,
    harpoonLinkedInUrl,
    icecreamRollInstagramUrl,
    jamesonInstagramUrl,
    kaffeehausInstagramUrl,
    luminousInstagramUrl,
    madMaryInstagramUrl,
    mariaLimaoIndustriaCriativaUrl,
    quatroPatasDe5EstrelasInstagramUrl,
    riceMeDeliInstagramUrl,
    riceMeInstagramUrl,
    tasteOfIndiaInstagramUrl,
    tjelaInstagramUrl,
} from '../../utils/urls';

export const ProjectsListDouble = (): JSX.Element => {
    const { texts } = useContext(TextsContext);
    const windowSize = useWindowSize();
    const isPhablet = windowSize.width < Breakpoint.Phablet;
    const isMobile = windowSize.width < Breakpoint.Mobile;
    // eslint-disable-next-line no-nested-ternary
    const slidesToShow = isMobile ? 1 : isPhablet ? 2 : 3;

    return (
        <>
            <section className="container" data-testid={projectsListDoubleSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.projects} />

                    <NukaCarousel
                        cellAlign="left"
                        slidesToShow={slidesToShow}
                        width={isMobile ? '100%' : '90%'}
                    >
                        <div>
                            <ProjectItem
                                isActive
                                isGrid
                                isInPartnership
                                brandLink={tjelaInstagramUrl}
                                brandTag="@tudonatjela"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="tjela"
                                imageSrc="/images/tjela.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isActive
                                isGrid
                                isInPartnership
                                brandLink={tasteOfIndiaInstagramUrl}
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
                                isGrid
                                brandLink={kaffeehausInstagramUrl}
                                brandTag="@kaffeehaus_lisboa"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="kaffeehaus"
                                imageSrc="/images/kaffeehaus.jpg"
                                year={2018}
                            />
                            <ProjectItem
                                isActive
                                isGrid
                                isInPartnership
                                brandLink={avocadoInstagramUrl}
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
                                isGrid
                                isInPartnership
                                brandLink={guacamoleInstagramUrl}
                                brandTag="@guacamolegmg"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="guacamole"
                                imageSrc="/images/guacamole.jpg"
                                year={2019}
                            />
                            <ProjectItem
                                isGrid
                                brandLink={mariaLimaoIndustriaCriativaUrl}
                                brandTag="@bebemarialimao"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="marialimao"
                                imageSrc="/images/maria-limao.jpg"
                                year="2019 - 2020"
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isGrid
                                brandLink={jamesonInstagramUrl}
                                brandTag="@jamesonportugal"
                                description={texts.socialMediaManagement}
                                imageAlt="jameson"
                                imageSrc="/images/jameson.jpg"
                                year={2019}
                            />
                            <ProjectItem
                                isActive
                                isGrid
                                brandLink={beefeaterWebsiteUrl}
                                brandTag="@beefeater"
                                description={texts.socialMediaManagement}
                                imageAlt="beefeater"
                                imageSrc="/images/beefeater.jpg"
                                year={2019}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isGrid
                                brandLink={biergartenInstagramUrl}
                                brandTag="@biergarten"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="biergarten"
                                imageSrc="/images/biergarten.jpg"
                                year={2019}
                            />
                            <ProjectItem
                                isGrid
                                brandLink={madMaryInstagramUrl}
                                brandTag="@madmarycuisine"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="mad mary"
                                imageSrc="/images/mad-mary.jpg"
                                year={2019}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isGrid
                                brandLink={bovineInstagramUrl}
                                brandTag="@bovinelisboa"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="bovine"
                                imageSrc="/images/bovine.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isGrid
                                brandLink={icecreamRollInstagramUrl}
                                brandTag="@icecreamroll.pt"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="icecream roll"
                                imageSrc="/images/ice-cream-roll.jpg"
                                year={2018}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isGrid
                                brandLink={riceMeInstagramUrl}
                                brandTag="@ricemerestaurante"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="rice me"
                                imageSrc="/images/rice-me.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isGrid
                                brandLink={riceMeDeliInstagramUrl}
                                brandTag="@ricemedeli"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="rice me deli"
                                imageSrc="/images/rice-me-deli.jpg"
                                year={2020}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isGrid
                                brandLink={harpoonLinkedInUrl}
                                brandTag="@harpoonjobs"
                                description={texts.socialMediaAndContentCreation}
                                imageAlt="harpoon"
                                imageSrc="/images/harpoon.jpg"
                                year="2020 - 2021"
                            />
                            <ProjectItem
                                isGrid
                                brandLink={catarinaSantiagoInstagramUrl}
                                brandTag="@catarinasantiago"
                                description={texts.contentCreation}
                                imageAlt="catarina santiago"
                                imageSrc="/images/content-creator.jpg"
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isGrid
                                brandLink={quatroPatasDe5EstrelasInstagramUrl}
                                brandTag="@4patasde5estrelas"
                                description={texts.socialMediaManagement}
                                imageAlt="4 patas de 5 estrelas"
                                imageSrc="/images/4patas5estrelas.jpg"
                                year={2020}
                            />
                            <ProjectItem
                                isGrid
                                isInPartnership
                                brandLink={luminousInstagramUrl}
                                brandTag="@becomeluminous"
                                description={texts.socialMediaAndPaidSocial}
                                imageAlt="luminous"
                                imageSrc="/images/luminous.jpg"
                                year={2020}
                            />
                        </div>
                        <div>
                            <ProjectItem
                                isActive
                                isGrid
                                brandLink={aAmigaEsteticistaIndustriaCriativaUrl}
                                brandTag="@aamigaesteticista"
                                description={texts.consultingAndContentCreation}
                                imageAlt="a amiga esteticista"
                                imageSrc="/images/amiga-esteticista.jpg"
                                year={2017}
                            />
                            <ProjectItem
                                isGrid
                                brandLink={anaroIndustriaCriativaUrl}
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
