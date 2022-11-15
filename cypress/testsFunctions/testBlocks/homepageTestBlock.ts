import { Locale } from '../../../types/Locale';
import { Viewport } from '../../utils/variables';
import { bannerTest } from '../bannerTest';
import { brandsListTest } from '../brandsListTest';
import { footerTest } from '../footerTest';
import { letsWorkSectionTest } from '../letsWorkSectionTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationHomepageTest } from '../navigation/navigationHomepageTest';
import { projectsSectionTest } from '../projectsSectionTest';
import { skillsBlockTest } from '../skillsBlockTest';
import { welcomeSectionTest } from '../welcomeSectionTest';
import { workflowSectionTest } from '../workflowSectionTest';

export const homepageTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale,
    viewport: Viewport
): void => {
    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('homepage_loads', locale, viewport);
    });

    it('renders the header and navigates properly', () => {
        navigationHomepageTest(locale, otherLocale, pageBeingTested, viewport);
    });

    it('renders the banner', () => {
        bannerTest(locale, viewport);
    });

    it('renders the welcome section', () => {
        welcomeSectionTest(locale, viewport);
    });

    it('renders the skills section', () => {
        skillsBlockTest(locale, viewport);
    });

    it('renders the workflow section', () => {
        workflowSectionTest(locale, viewport);
    });

    it('renders the projects section', () => {
        projectsSectionTest(locale, viewport);
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
