import { Locale } from '../../../types/Locale';
import { urls } from '../../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../../utils/variables';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.projects;

describe('projects page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale);
});
