import { Locale } from '../../../types/Locale';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.projects;

describe('projects page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale);
});
