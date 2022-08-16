import { Locale } from '../../../utils/locales';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.projects;

describe('projects page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale);
});
