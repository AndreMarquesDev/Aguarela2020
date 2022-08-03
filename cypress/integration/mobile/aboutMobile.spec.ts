import { Locale } from '../../../utils/locales';
import { aboutPageTestBlock } from '../../testsFunctions/testBlocks/aboutPageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.about;

describe('about page mobile', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    aboutPageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
