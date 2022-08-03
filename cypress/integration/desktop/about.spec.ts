import { urls } from '../../utils/selectors';
import { Locale } from '../../../utils/locales';
import { defaultViewportWidth, defaultViewportHeight, Viewport } from '../../utils/variables';
import { aboutPageTestBlock } from '../../testsFunctions/testBlocks/aboutPageTestBlock';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.about;

describe('about page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    aboutPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
