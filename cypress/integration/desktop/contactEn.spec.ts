import { Locale } from '../../../utils/locales';
import { contactPageTestBlock } from '../../testsFunctions/testBlocks/contactPageTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.contact;

describe('contact page mobile in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    contactPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
