import {
    projectsListDoubleSectionDataTestId,
    projectsListNoCarouselDataTestId,
    projectsListSectionDataTestId,
} from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { getLocalizedTexts } from '../utils/getTexts';
import { urls } from '../utils/selectors';
import {
    projectsListNoCarouselImagesHeight,
    projectsListNoCarouselImagesWidth,
} from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const projectsSectionTest = (locale: Locale): void => {
    const {
        projects,
        socialMediaManagementAndContentCreation,
        present,
        inPartnershipWith,
        seeMore,
    } = getLocalizedTexts(locale);

    cy.getByText(projectsListSectionDataTestId, projects).scrollIntoView();

    matchSnapshot('projectsList', locale);

    cy.imageIsVisible(projectsListSectionDataTestId, 'tjela logo');
    cy.imageWidthIs(projectsListSectionDataTestId, 'tjela logo', projectsListNoCarouselImagesWidth);
    cy.imageHeightIs(
        projectsListSectionDataTestId,
        'tjela logo',
        projectsListNoCarouselImagesHeight
    );
    cy.isHidden(projectsListSectionDataTestId, '@tudonatjela');
    cy.getByDataTestId(projectsListNoCarouselDataTestId)
        .find('[alt="tjela logo"]')
        .parentsUntil('ul', 'li')
        .find('.backface')
        .forceHover();
    cy.isVisible(projectsListSectionDataTestId, '@tudonatjela');
    cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
    cy.isVisible(projectsListSectionDataTestId, `2020 - ${present}`);
    cy.isVisible(projectsListSectionDataTestId, `* ${inPartnershipWith}`);

    cy.imageIsVisible(projectsListSectionDataTestId, 'kaffeehaus logo');
    cy.imageWidthIs(
        projectsListSectionDataTestId,
        'kaffeehaus logo',
        projectsListNoCarouselImagesWidth
    );
    cy.imageHeightIs(
        projectsListSectionDataTestId,
        'kaffeehaus logo',
        projectsListNoCarouselImagesHeight
    );
    cy.isHidden(projectsListSectionDataTestId, '@kaffeehaus_lisboa');
    cy.getByDataTestId(projectsListNoCarouselDataTestId)
        .find('[alt="kaffeehaus logo"]')
        .parentsUntil('ul', 'li')
        .find('.backface')
        .forceHover();
    cy.isVisible(projectsListSectionDataTestId, '@kaffeehaus_lisboa');
    cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
    cy.isVisible(projectsListSectionDataTestId, `2018 - ${present}`);

    cy.imageIsVisible(projectsListSectionDataTestId, 'guacamole logo');
    cy.imageWidthIs(
        projectsListSectionDataTestId,
        'guacamole logo',
        projectsListNoCarouselImagesWidth
    );
    cy.imageHeightIs(
        projectsListSectionDataTestId,
        'guacamole logo',
        projectsListNoCarouselImagesHeight
    );
    cy.isHidden(projectsListSectionDataTestId, '@guacamolegmg');
    cy.getByDataTestId(projectsListNoCarouselDataTestId)
        .find('[alt="guacamole logo"]')
        .parentsUntil('ul', 'li')
        .find('.backface')
        .forceHover();
    cy.isVisible(projectsListSectionDataTestId, '@guacamolegmg');
    cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
    cy.isVisible(projectsListSectionDataTestId, `2019 - ${present}`);
    cy.isVisible(projectsListSectionDataTestId, `* ${inPartnershipWith}`);

    cy.getByText(projectsListSectionDataTestId, seeMore).click();
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].projects);
};
