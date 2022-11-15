import { Locale } from '../../../types/Locale';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';
import { urls } from '../../utils/selectors';
import { desktopViewportWidth, desktopViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.homepage;

describe('homepage in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(desktopViewportWidth, desktopViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
