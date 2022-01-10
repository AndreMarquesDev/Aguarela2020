import { textsPt } from '../../utils/texts';
import { Locale } from '../../utils/locales';
import { footerTest } from '../testsFunctions/footerTest';
import { urls } from '../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';
import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { navigationContactPageTest } from '../testsFunctions/navigation/navigationContactPageTest';

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

    it('renders the contact block section', () => {
        const { contactMe1, contactMe2, contactMe3 } = textsPt;

        cy.getByText(contactBlockSectionDataTestId, contactMe1);
        cy.getByText(contactBlockSectionDataTestId, contactMe2);
        cy.getByText(contactBlockSectionDataTestId, contactMe3);
    });

    it('renders the footer', () => {
        footerTest(locale, pageBeingTested);
    });
});
