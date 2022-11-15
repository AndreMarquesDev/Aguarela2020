import { Locale } from '../../../types/Locale';
import { contactPageTestBlock } from '../../testsFunctions/testBlocks/contactPageTestBlock';
import { urls } from '../../utils/selectors';
import { desktopViewportWidth, desktopViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.contact;

describe('contact page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(desktopViewportWidth, desktopViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    contactPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
