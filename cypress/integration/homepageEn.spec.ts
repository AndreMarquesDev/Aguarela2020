import { Locale } from '../../utils/locales';
import { bannerTest } from '../testsFunctions/bannerTest';
import { brandsListTest } from '../testsFunctions/brandsListTest';
import { footerTest } from '../testsFunctions/footerTest';
import { letsWorkSectionTest } from '../testsFunctions/letsWorkSectionTest';
import { matchSnapshot } from '../testsFunctions/matchSnapshot';
import { navigationHomepageTest } from '../testsFunctions/navigation/navigationHomepageTest';
import { projectsSectionTest } from '../testsFunctions/projectsSectionTest';
import { skillsBlockTest } from '../testsFunctions/skillsBlockTest';
import { welcomeSectionTest } from '../testsFunctions/welcomeSectionTest';
import { workflowSectionTest } from '../testsFunctions/workflowSectionTest';
import { urls } from '../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.homepage;

describe('homepage in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('homepage_loads', locale);
    });

    it('renders the header and navigates properly', () => {
        navigationHomepageTest(locale, otherLocale, pageBeingTested);
    });

    it('renders the banner', () => {
        bannerTest(locale);
    });

    it('renders the welcome section', () => {
        welcomeSectionTest(locale);
    });

    it('renders the skills section', () => {
        skillsBlockTest(locale);
    });

    it('renders the workflow section', () => {
        workflowSectionTest(locale);
    });

    it('renders the projects section', () => {
        projectsSectionTest(locale);
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
