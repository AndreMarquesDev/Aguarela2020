import { Locale } from '../../../types/Locale';
import { homepageTestBlock } from '../../testsFunctions/testBlocks/homepageTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.homepage;

describe('homepage mobile', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    homepageTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
