import { Locale } from '../../utils/locales';
import { footerTest } from '../testsFunctions/footerTest';
import { urls } from '../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';
import { navigationContactPageTest } from '../testsFunctions/navigation/navigationContactPageTest';
import { contactBlockTest } from '../testsFunctions/contactBlockTest';
import { contactFormTest } from '../testsFunctions/contactFormTest';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.contact;

describe('contact page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);
    });

    it('renders the header and navigates properly', () => {
        navigationContactPageTest(locale, otherLocale, pageBeingTested);
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
});
