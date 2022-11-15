import { Locale } from '../../../types/Locale';
import { urls } from '../../utils/selectors';
import { desktopViewportWidth, desktopViewportHeight, Viewport } from '../../utils/variables';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.services;

describe('services page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(desktopViewportWidth, desktopViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
