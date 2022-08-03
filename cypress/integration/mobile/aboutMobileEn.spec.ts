import { Locale } from '../../../utils/locales';
import { aboutPageTestBlock } from '../../testsFunctions/testBlocks/aboutPageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.about;

describe('about page mobile in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    aboutPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
