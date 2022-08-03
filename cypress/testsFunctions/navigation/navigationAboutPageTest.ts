import {
    headerDataTestId,
    aboutMeSectionDataTestId,
    homepageLogoLinkDataTestId,
    homepageBannerContainerDataTestId,
    projectsListDoubleSectionDataTestId,
    servicesBlockSectionDataTestId,
    contactBlockSectionDataTestId,
    menuIconButtonDataTestId,
} from '../../../utils/dataTestIds';
import { Locale } from '../../../utils/locales';
import { urls } from '../../utils/selectors';
import { getLocalizedTexts } from '../../utils/getTexts';
import { Viewport } from '../../utils/variables';

const openMenuMobile = (isMobile: boolean, isFirefox: boolean): void => {
    if (isMobile) {
        cy.getByDataTestId(menuIconButtonDataTestId).click({ force: isFirefox });
    }
};

export const navigationAboutTest = (
    locale: Locale,
    otherLocale: Locale,
    pageBeingTested: string,
    viewport: Viewport = Viewport.desktop
): void => {
    const { about, projects, services, contact } = getLocalizedTexts(locale);
    const remainingTexts = getLocalizedTexts(otherLocale);
    const isFirefox = Cypress.isBrowser('firefox');
    const isMobile = viewport === Viewport.mobile;

    cy.imageIsVisible(headerDataTestId, 'Logo', isFirefox);

    cy.getByDataTestId(homepageLogoLinkDataTestId).click({ force: isFirefox });
    cy.getByDataTestId(homepageBannerContainerDataTestId);
    cy.urlIsEqualTo(urls[locale].homepage);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, about).click({ force: isFirefox });
    cy.getByDataTestId(aboutMeSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, projects).click({ force: isFirefox });
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].projects);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, about).click({ force: isFirefox });
    cy.getByDataTestId(aboutMeSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, services).click({ force: isFirefox });
    cy.getByDataTestId(servicesBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].services);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, about).click({ force: isFirefox });
    cy.getByDataTestId(aboutMeSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, contact).click({ force: isFirefox });
    cy.getByDataTestId(contactBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].contact);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, about).click({ force: isFirefox });
    cy.getByDataTestId(aboutMeSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, otherLocale).click({ force: isFirefox });
    cy.getByText(headerDataTestId, remainingTexts.about);
    cy.getByText(headerDataTestId, remainingTexts.projects);
    cy.getByText(headerDataTestId, remainingTexts.services);
    cy.getByText(headerDataTestId, remainingTexts.contact);
    cy.urlIsEqualTo(urls[otherLocale].about);

    openMenuMobile(isMobile, isFirefox);

    cy.getByText(headerDataTestId, locale).click({ force: isFirefox });
    cy.getByText(headerDataTestId, about);
    cy.getByText(headerDataTestId, projects);
    cy.getByText(headerDataTestId, services);
    cy.getByText(headerDataTestId, contact);
    cy.urlIsEqualTo(pageBeingTested);
};
