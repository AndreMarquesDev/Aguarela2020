import { Locale } from '../../../utils/locales';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.services;

describe('services page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale);
});
