import { Locale } from '../../../utils/locales';
import { contactPageTestBlock } from '../../testsFunctions/testBlocks/contactPageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportHeight, mobileViewportWidth, Viewport } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.contact;

describe('contact page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    contactPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
