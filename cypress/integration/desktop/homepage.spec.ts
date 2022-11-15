import { Locale } from '../../../types/Locale';
import { desktopViewportWidth, desktopViewportHeight, Viewport } from '../../utils/variables';
import { urls } from '../../utils/selectors';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.homepage;

describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.viewport(desktopViewportWidth, desktopViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
