import { Locale } from '../../../utils/locales';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.homepage;

describe('homepage mobile in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
