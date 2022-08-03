import { Locale } from '../../../utils/locales';
import { Viewport } from '../../utils/variables';
import { aboutMeSectionTest } from '../aboutMeSectionTest';
import { brandsListTest } from '../brandsListTest';
import { footerTest } from '../footerTest';
import { letsWorkSectionTest } from '../letsWorkSectionTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationAboutTest } from '../navigation/navigationAboutPageTest';

export const aboutPageTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale,
    viewport: Viewport
): void => {
    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('about_loads', locale, viewport);
    });

    it('renders the header and navigates properly', () => {
        navigationAboutTest(locale, otherLocale, pageBeingTested, viewport);
    });

    it('renders the about me section', () => {
        aboutMeSectionTest(locale, viewport);
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
