import { Locale } from '../../../types/Locale';
import { contactPageTestBlock } from '../../testsFunctions/testBlocks/contactPageTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.contact;

describe('contact page mobile in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    contactPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
