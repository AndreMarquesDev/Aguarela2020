import { Locale } from '../../../utils/locales';
import { servicesTestBlock } from '../../testsFunctions/testBlocks/servicesTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.services;

describe('services page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    servicesTestBlock(pageBeingTested, locale, otherLocale);
});
