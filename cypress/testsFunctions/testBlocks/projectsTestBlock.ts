import { Locale } from '../../../types/Locale';
import { brandsListTest } from '../brandsListTest';
import { footerTest } from '../footerTest';
import { letsWorkSectionTest } from '../letsWorkSectionTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationProjectsPageTest } from '../navigation/navigationProjectsPageTest';
import { projectsLisDoubleSectionTest } from '../projectsLisDoubleSectionTest';

export const projectsTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale
): void => {
    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('projects_loads', locale);
    });

    it('renders the header and navigates properly', () => {
        navigationProjectsPageTest(locale, otherLocale, pageBeingTested);
    });

    it('renders the projects list double section', () => {
        projectsLisDoubleSectionTest(locale);
    });

    it('renders the brands list section', () => {
        brandsListTest(locale);
    });

    it("renders the let's work section", () => {
        letsWorkSectionTest(locale);
    });

    it('renders the footer', () => {
        footerTest(locale, pageBeingTested);
    });
};
