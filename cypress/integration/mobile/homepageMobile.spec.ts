import { Locale } from '../../../utils/locales';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.homepage;

describe('homepage mobile', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
