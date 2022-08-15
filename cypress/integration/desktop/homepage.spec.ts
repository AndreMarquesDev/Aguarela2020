import { Locale } from '../../../utils/locales';
import { defaultViewportWidth, defaultViewportHeight, Viewport } from '../../utils/variables';
import { urls } from '../../utils/selectors';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.homepage;

describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
