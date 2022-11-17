import { Locale } from '../../../types/Locale';
import { Viewport } from '../../utils/variables';
import { brandsListTest } from '../brandsListTest';
import { footerTest } from '../footerTest';
import { letsWorkSectionTest } from '../letsWorkSectionTest';
import { matchSnapshot } from '../matchSnapshot';
import { navigationServicesPageTest } from '../navigation/navigationServicesPageTest';
import { servicesSectionTest } from '../servicesSectionTest';

export const servicesTestBlock = (
    pageBeingTested: string,
    locale: Locale,
    otherLocale: Locale,
    viewport: Viewport
): void => {
    it('loads', () => {
        cy.urlIsEqualTo(pageBeingTested);

        matchSnapshot('services_loads', locale, viewport);
    });

    it('renders the header and navigates properly', () => {
        navigationServicesPageTest(locale, otherLocale, pageBeingTested, viewport);
    });

    it('renders the services section', () => {
        servicesSectionTest(locale, viewport);
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
