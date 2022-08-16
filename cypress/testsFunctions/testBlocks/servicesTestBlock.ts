import { Locale } from '../../../utils/locales';
import { brandsListTest } from '../brandsListTest';
import { footerTest } from '../footerTest';
import { letsWorkSectionTest } from '../letsWorkSectionTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationServicesPageTest } from '../navigation/navigationServicesPageTest';
import { servicesSectionTest } from '../servicesSectionTest';

export const servicesTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale
): void => {
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
};
