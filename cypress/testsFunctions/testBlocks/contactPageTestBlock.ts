import { Locale } from '../../../utils/locales';
import { Viewport } from '../../utils/variables';
import { contactBlockTest } from '../contactBlockTest';
import { contactFormTest } from '../contactFormTest';
import { footerTest } from '../footerTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationContactPageTest } from '../navigation/navigationContactPageTest';

export const contactPageTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale,
    viewport: Viewport
): void => {
    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('contact_loads', locale);
    });

    it('renders the header and navigates properly', () => {
        navigationContactPageTest(locale, otherLocale, pageBeingTested, viewport);
    });

    it('renders the contact block', () => {
        contactBlockTest(locale);
    });

    it('renders the contact form', () => {
        contactFormTest(locale);
    });

    it('renders the footer', () => {
        footerTest(locale, pageBeingTested);
    });
};