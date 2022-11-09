import {
    nukaCarouselNextButtonDataTestId,
    projectsListDoubleSectionDataTestId,
    projectsListNoCarouselDataTestId,
    projectsListSectionDataTestId,
} from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import { getLocalizedTexts } from '../utils/getTexts';
import { urls } from '../utils/selectors';
import {
    projectsListNoCarouselImagesHeight,
    projectsListNoCarouselImagesHeightFirefoxMobile,
    projectsListNoCarouselImagesHeightMobile,
    projectsListNoCarouselImagesWidth,
    projectsListNoCarouselImagesWidthFirefoxMobile,
    projectsListNoCarouselImagesWidthMobile,
    Viewport,
} from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

const testSlide = (
    locale: Locale,
    project: string,
    instagramUrl: string,
    startYear: number,
    isInPartnership: boolean,
    isMobile: boolean
): void => {
    const isFirefox = Cypress.isBrowser('firefox');
    const { socialMediaManagementAndContentCreation, present, inPartnershipWith } =
        getLocalizedTexts(locale);

    const projectsListMobileWidth = isFirefox
        ? projectsListNoCarouselImagesWidthFirefoxMobile
        : projectsListNoCarouselImagesWidthMobile;
    const slideWidth = isMobile ? projectsListMobileWidth : projectsListNoCarouselImagesWidth;

    const projectsListMobileHeight = isFirefox
        ? projectsListNoCarouselImagesHeightFirefoxMobile
        : projectsListNoCarouselImagesHeightMobile;
    const slideHeight = isMobile ? projectsListMobileHeight : projectsListNoCarouselImagesHeight;

    const dataTestIdWrapper = isMobile
        ? projectsListSectionDataTestId
        : projectsListNoCarouselDataTestId;

    cy.imageIsVisible(projectsListSectionDataTestId, `${project} logo`);
    cy.imageWidthIs(projectsListSectionDataTestId, `${project} logo`, slideWidth);
    cy.imageHeightIs(projectsListSectionDataTestId, `${project} logo`, slideHeight);
    cy.isHidden(projectsListSectionDataTestId, instagramUrl);
    cy.getByDataTestId(dataTestIdWrapper)
        .find(`[alt="${project} logo"]`)
        .parentsUntil('ul', 'li')
        .find('.backface')
        .forceHover();
    cy.isVisible(projectsListSectionDataTestId, instagramUrl);

    if (!isMobile) {
        cy.isVisible(projectsListSectionDataTestId, socialMediaManagementAndContentCreation);
    }

    cy.isVisible(projectsListSectionDataTestId, `${startYear} - ${present}`);

    if (isInPartnership && !isMobile) {
        cy.isVisible(projectsListSectionDataTestId, `* ${inPartnershipWith}`);
    }
};

const clickNextArrowButtonIfMobile = (isMobile: boolean, projectsText: string): void => {
    const isFirefox = Cypress.isBrowser('firefox');

    if (isMobile) {
        cy.getByDataTestIdParent(
            projectsListSectionDataTestId,
            nukaCarouselNextButtonDataTestId
        ).click({ force: isFirefox });

        cy.getByText(projectsListSectionDataTestId, projectsText).scrollIntoView();
    }
};

export const projectsSectionTest = (locale: Locale, viewport: Viewport): void => {
    const { projects, seeMore } = getLocalizedTexts(locale);
    const isMobile = viewport === Viewport.mobile;

    cy.getByText(projectsListSectionDataTestId, projects).scrollIntoView();

    matchSnapshot('projectsList', locale, viewport);

    testSlide(locale, 'tjela', '@tudonatjela', 2020, true, isMobile);

    clickNextArrowButtonIfMobile(isMobile, projects);

    testSlide(locale, 'kaffeehaus', '@kaffeehaus_lisboa', 2018, false, isMobile);

    clickNextArrowButtonIfMobile(isMobile, projects);

    testSlide(locale, 'guacamole', '@guacamolegmg', 2019, true, isMobile);

    clickNextArrowButtonIfMobile(isMobile, projects);

    cy.getByText(projectsListSectionDataTestId, projects).scrollIntoView();

    matchSnapshot('projectsList_backface', locale, viewport);

    cy.getByText(projectsListSectionDataTestId, seeMore).click();
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].projects);
};
