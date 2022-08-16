import { Locale } from '../../../utils/locales';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.projects;

describe('projects page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale);
});
