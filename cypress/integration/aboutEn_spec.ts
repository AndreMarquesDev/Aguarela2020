import { urls } from '../utils/selectors';
import { Locale } from '../../utils/locales';
import { brandsListTest } from '../testsFunctions/brandsListTest';
import { footerTest } from '../testsFunctions/footerTest';
import { letsWorkSectionTest } from '../testsFunctions/letsWorkSectionTest';
import { navigationAboutTest } from '../testsFunctions/navigation/navigationAboutPageTest';
import { aboutMeSectionTest } from '../testsFunctions/aboutMeSectionTest';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.about;

describe('about page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);
    });

    it('renders the header and navigates properly', () => {
        navigationAboutTest(locale, otherLocale, pageBeingTested);
    });

    it('renders the about me section', () => {
        aboutMeSectionTest(locale);
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
});
