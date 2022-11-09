import { Locale } from '../../../types/Locale';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.services;

describe('services page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale);
});
