import { Locale } from '../../../types/Locale';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.services;

describe('services page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale);
});
