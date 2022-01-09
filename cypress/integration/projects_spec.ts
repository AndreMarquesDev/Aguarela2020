import { Locale } from '../../utils/locales';
import { brandsListTest } from '../testsFunctions/brandsListTest';
import { footerTest } from '../testsFunctions/footerTest';
import { letsWorkSectionTest } from '../testsFunctions/letsWorkSectionTest';
import { navigationProjectsPageTest } from '../testsFunctions/navigation/navigationProjectsPageTest';
import { urls } from '../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';

const locale: Locale = 'pt';
const otherLocale: Locale = 'en';
const pageBeingTested = urls.pt.projects;

describe('projects page', () => {
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

    // it('renders the projects section', () => {
    //     cy.getByText(projectsListDoubleSectionDataTestId, projects).scrollIntoView();

    //     cy.viewport(defaultViewportWidth, defaultViewportHeight);

    //     cy.getByDataTestId(projectsListDoubleSectionDataTestId)
    //         .find('.slide-visible')
    //         .should('have.length', 3);
    //     cy.getByDataTestId(projectsListDoubleSectionDataTestId)
    //         .find(`.slide-visible [data-testid="${projectItemTouchDivDataTestId}"]`)
    //         .should('have.length', 6);

    //     cy.imageIsVisible(projectsListDoubleSectionDataTestId, 'tjela logo');
    //     cy.isHidden(projectsListDoubleSectionDataTestId, '@tudonatjela');
    //     cy.getByDataTestId(projectsListDoubleSectionDataTestId)
    //         .find('[alt="tjela logo"]')
    //         .parentsUntil('ul', 'li')
    //         .find('.backface')
    //         .forceHover();
    //     cy.isVisible(projectsListDoubleSectionDataTestId, '@tudonatjela');
    //     cy.isVisible(projectsListDoubleSectionDataTestId, socialMediaManagementAndContentCreation);
    //     cy.isVisible(projectsListDoubleSectionDataTestId, `2020 - ${present}`);
    //     cy.isVisible(projectsListDoubleSectionDataTestId, `* ${inPartnershipWith}`);
    // });

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
