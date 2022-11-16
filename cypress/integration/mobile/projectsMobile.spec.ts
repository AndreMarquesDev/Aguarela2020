import { Locale } from '../../../types/Locale';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';

const locale: Locale = Locale.Pt;
const otherLocale: Locale = Locale.En;
const pageBeingTested = urls.pt.projects;

describe('projects page mobile', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
