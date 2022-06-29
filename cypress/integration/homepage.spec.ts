import { Locale } from '../../utils/locales';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';
import { urls } from '../utils/selectors';
import { skillsBlockTest } from '../testsFunctions/skillsBlockTest';
import { welcomeSectionTest } from '../testsFunctions/welcomeSectionTest';
import { workflowSectionTest } from '../testsFunctions/workflowSectionTest';
import { projectsSectionTest } from '../testsFunctions/projectsSectionTest';
import { brandsListTest } from '../testsFunctions/brandsListTest';
import { footerTest } from '../testsFunctions/footerTest';
import { letsWorkSectionTest } from '../testsFunctions/letsWorkSectionTest';
import { bannerTest } from '../testsFunctions/bannerTest';
import { navigationHomepageTest } from '../testsFunctions/navigation/navigationHomepageTest';
import { matchSnapshot } from '../testsFunctions/matchSnapshot';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.homepage;

describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.viewport(defaultViewportWidth, defaultViewportHeight);

        cy.document().its('fonts').invoke('check', '900 150rem Montserrat').should('be.true');
    });

    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);
    });

    it('renders the header and navigates properly', () => {
        navigationHomepageTest(locale, otherLocale, pageBeingTested);
    });

    it('renders the banner', () => {
        bannerTest();
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

    it('passes the visual regression snapshot test', () => {
        matchSnapshot('homepage', locale);
    });
});
