import { Locale } from '../../../utils/locales';
import { contactPageTestBlock } from '../../testsFunctions/testBlocks/contactPageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportHeight, mobileViewportWidth, Viewport } from '../../utils/variables';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.contact;

describe('contact page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    contactPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
