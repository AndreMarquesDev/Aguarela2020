import {
    headerDataTestId,
    aboutMeSectionDataTestId,
    homepageLogoLinkDataTestId,
    homepageBannerContainerDataTestId,
    projectsListDoubleSectionDataTestId,
    servicesBlockSectionDataTestId,
    contactBlockSectionDataTestId,
} from '../../../utils/dataTestIds';
import { Locale } from '../../../utils/locales';
import { urls } from '../../utils/selectors';
import { getLocalizedTexts } from '../../utils/getTexts';

export const navigationHomepageTest = (
    locale: Locale,
    otherLocale: Locale,
    pageBeingTested: string
): void => {
    const { about, projects, services, contact } = getLocalizedTexts(locale);
    const remainingTexts = getLocalizedTexts(otherLocale);

    cy.imageIsVisible(headerDataTestId, 'Logo');

    cy.getByText(headerDataTestId, about).click();
    cy.getByDataTestId(aboutMeSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].about);
    cy.getByDataTestId(homepageLogoLinkDataTestId).click();
    cy.getByDataTestId(homepageBannerContainerDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, projects).click();
    cy.getByDataTestId(projectsListDoubleSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].projects);
    cy.getByDataTestId(homepageLogoLinkDataTestId).click();
    cy.getByDataTestId(homepageBannerContainerDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, services).click();
    cy.getByDataTestId(servicesBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].services);
    cy.getByDataTestId(homepageLogoLinkDataTestId).click();
    cy.getByDataTestId(homepageBannerContainerDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, contact).click();
    cy.getByDataTestId(contactBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].contact);
    cy.getByDataTestId(homepageLogoLinkDataTestId).click();
    cy.getByDataTestId(homepageBannerContainerDataTestId);
    cy.urlIsEqualTo(pageBeingTested);

    cy.getByText(headerDataTestId, otherLocale).click();
    cy.getByText(headerDataTestId, remainingTexts.about);
    cy.getByText(headerDataTestId, remainingTexts.projects);
    cy.getByText(headerDataTestId, remainingTexts.services);
    cy.getByText(headerDataTestId, remainingTexts.contact);
    cy.urlIsEqualTo(urls[otherLocale].homepage);
    cy.getByText(headerDataTestId, locale).click();
    cy.getByText(headerDataTestId, about);
    cy.getByText(headerDataTestId, projects);
    cy.getByText(headerDataTestId, services);
    cy.getByText(headerDataTestId, contact);
    cy.urlIsEqualTo(pageBeingTested);
};
