import { Locale } from '../../../types/Locale';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';
import { urls } from '../../utils/selectors';
import { desktopViewportWidth, desktopViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.services;

describe('services page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(desktopViewportWidth, desktopViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
