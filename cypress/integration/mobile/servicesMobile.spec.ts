import { Locale } from '../../../types/Locale';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.services;

describe('services page mobile', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
