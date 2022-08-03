import { urls } from '../../utils/selectors';
import { Locale } from '../../../utils/locales';
import { defaultViewportWidth, defaultViewportHeight, Viewport } from '../../utils/variables';
import { aboutPageTestBlock } from '../../testsFunctions/testBlocks/aboutPageTestBlock';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.about;

describe('about page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    aboutPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
