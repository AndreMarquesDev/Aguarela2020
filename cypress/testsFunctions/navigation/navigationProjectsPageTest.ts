import {
    headerDataTestId,
    aboutMeSectionDataTestId,
    homepageLogoLinkDataTestId,
    homepageBannerContainerDataTestId,
    projectsListDoubleSectionDataTestId,
    servicesBlockSectionDataTestId,
    contactBlockSectionDataTestId,
} from '../../../utils/dataTestIds';
import { Locale } from '../../../types/Locale';
import { urls } from '../../utils/selectors';
import { getLocalizedTexts } from '../../utils/utils';

export const navigationProjectsPageTest = (
    locale: Locale,
    otherLocale: Locale,
    pageBeingTested: string
): void => {
    const { about, projects, services, contact } = getLocalizedTexts(locale);
    const remainingTexts = getLocalizedTexts(otherLocale);
    const isFirefox = Cypress.isBrowser('firefox');

    cy.imageIsVisible(headerDataTestId, 'Logo', isFirefox);

    cy.getByDataTestId(homepageLogoLinkDataTestId).click({ force: isFirefox });
    cy.getByDataTestId(homepageBannerContainerDataTestId);
    cy.urlIsEqualTo(urls[locale].homepage);
    cy.getByText(headerDataTestId, projects).click({ force: isFirefox });
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, about).click({ force: isFirefox });
    cy.getByDataTestId(aboutMeSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].about);
    cy.getByText(headerDataTestId, projects).click({ force: isFirefox });
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, services).click({ force: isFirefox });
    cy.getByDataTestId(servicesBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].services);
    cy.getByText(headerDataTestId, projects).click({ force: isFirefox });
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, contact).click({ force: isFirefox });
    cy.getByDataTestId(contactBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].contact);
    cy.getByText(headerDataTestId, projects).click({ force: isFirefox });
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, otherLocale).click({ force: isFirefox });
    cy.getByText(headerDataTestId, remainingTexts.about);
    cy.getByText(headerDataTestId, remainingTexts.projects);
    cy.getByText(headerDataTestId, remainingTexts.services);
    cy.getByText(headerDataTestId, remainingTexts.contact);
    cy.urlIsEqualTo(urls[otherLocale].projects);
    cy.getByText(headerDataTestId, locale).click({ force: isFirefox });
    cy.getByText(headerDataTestId, about);
    cy.getByText(headerDataTestId, projects);
    cy.getByText(headerDataTestId, services);
    cy.getByText(headerDataTestId, contact);
    cy.urlIsEqualTo(pageBeingTested);
};
