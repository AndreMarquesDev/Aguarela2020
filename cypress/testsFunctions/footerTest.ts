import { contactBlockSectionDataTestId, footerDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import {
    andreMarquesDevWebsiteUrl,
    aguarelaDigitalInstagramUrl,
    aguarelaDigitalFacebookUrl,
} from '../../utils/urls';
import { getLocalizedTexts } from '../utils/getTexts';
import { urls } from '../utils/selectors';
import { Viewport } from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const footerTest = (
    locale: Locale,
    pageBeingTested: string,
    viewport: Viewport = Viewport.desktop
): void => {
    const { footerInfo } = getLocalizedTexts(locale);

    cy.getByText(footerDataTestId, `${footerInfo} André Marques`).scrollIntoView();

    matchSnapshot('footer', locale, viewport);

    cy.getByHref(footerDataTestId, andreMarquesDevWebsiteUrl);
    cy.getByHref(footerDataTestId, aguarelaDigitalInstagramUrl);
    cy.getByHref(footerDataTestId, aguarelaDigitalFacebookUrl);

    cy.getByDataTestId(footerDataTestId).find('[aria-label="Go to contact page"]').click();
    cy.getByDataTestId(contactBlockSectionDataTestId);
    cy.urlIsEqualTo(urls[locale].contact);

    cy.visit(pageBeingTested);
};
