import { Locale } from '../../../types/Locale';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';
import { urls } from '../../utils/selectors';
import { mobileViewportWidth, mobileViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.projects;

describe('projects page mobile in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(mobileViewportWidth, mobileViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale, Viewport.mobile);
});
