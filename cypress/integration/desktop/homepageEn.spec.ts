import { Locale } from '../../../utils/locales';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.homepage;

describe('homepage in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
