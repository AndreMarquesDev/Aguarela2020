import { Locale } from '../../../types/Locale';
import { projectsTestBlock } from '../../testsFunctions/testBlocks/projectsTestBlock';
import { urls } from '../../utils/selectors';
import { desktopViewportWidth, desktopViewportHeight, Viewport } from '../../utils/variables';

const locale: Locale = Locale.En;
const otherLocale: Locale = Locale.Pt;
const pageBeingTested = urls.en.projects;

describe('projects page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(desktopViewportWidth, desktopViewportHeight);
    });

    projectsTestBlock(pageBeingTested, locale, otherLocale, Viewport.desktop);
});
