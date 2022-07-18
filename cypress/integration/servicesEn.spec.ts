import { Locale } from '../../utils/locales';
import { brandsListTest } from '../testsFunctions/brandsListTest';
import { footerTest } from '../testsFunctions/footerTest';
import { letsWorkSectionTest } from '../testsFunctions/letsWorkSectionTest';
import { urls } from '../utils/selectors';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';
import { navigationServicesPageTest } from '../testsFunctions/navigation/navigationServicesPageTest';
import { servicesSectionTest } from '../testsFunctions/servicesSectionTest';
import { matchSnapshot } from '../testsFunctions/matchSnapshot';

const locale: Locale = 'en';
const otherLocale: Locale = 'pt';
const pageBeingTested = urls.en.services;

describe('services page', () => {
    beforeEach(() => {
        cy.visit(pageBeingTested);

        cy.viewport(defaultViewportWidth, defaultViewportHeight);
    });

    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('services_loads', locale);
    });

    it('renders the header and navigates properly', () => {
        navigationServicesPageTest(locale, otherLocale, pageBeingTested);
    });

    it('renders the services section', () => {
        servicesSectionTest(locale);
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
