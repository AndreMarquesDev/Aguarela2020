import { Locale } from '../../../types/Locale';
import { Viewport } from '../../utils/variables';
import { brandsListTest } from '../brandsListTest';
import { footerTest } from '../footerTest';
import { letsWorkSectionTest } from '../letsWorkSectionTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationProjectsPageTest } from '../navigation/navigationProjectsPageTest';
import { projectsListDoubleSectionTest } from '../projectsListDoubleSectionTest';

export const projectsTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale,
    viewport: Viewport
): void => {
    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('projects_loads', locale, viewport);
    });

    it('renders the header and navigates properly', () => {
        navigationProjectsPageTest(locale, otherLocale, pageBeingTested, viewport);
    });

    it('renders the projects list double section', () => {
        projectsListDoubleSectionTest(locale, viewport);
    });

    it('renders the brands list section', () => {
        brandsListTest(locale, viewport);
    });

    it("renders the let's work section", () => {
        letsWorkSectionTest(locale, viewport);
    });

    it('renders the footer', () => {
        footerTest(locale, pageBeingTested, viewport);
    });
};
