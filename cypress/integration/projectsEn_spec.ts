import { projectsListDoubleSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { textsEn } from '../../utils/texts';
import { brandsListTest } from '../testsFunctions/brandsListTest';
import { footerTest } from '../testsFunctions/footerTest';
import { letsWorkSectionTest } from '../testsFunctions/letsWorkSectionTest';
import { navigationProjectsPageTest } from '../testsFunctions/navigation/navigationProjectsPageTest';
import { urls } from '../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';

const { projects } = textsEn;

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.projects;

describe('projects page in English', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);
    });

    it('renders the header and navigates properly', () => {
        navigationProjectsPageTest(locale, otherLocale, pageBeingTested);
    });

    it('renders the projects section', () => {
        cy.getByText(projectsListDoubleSectionDataTestId, projects).scrollIntoView();
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
