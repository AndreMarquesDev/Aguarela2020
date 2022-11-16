import { Locale } from '../../../types/Locale';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.services;

describe('services page mobile in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
