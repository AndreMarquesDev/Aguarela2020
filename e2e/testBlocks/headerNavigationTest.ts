import type { Page } from '@playwright/test';
import type { Locale } from '../../src/types/Locale';
import type { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import type { Page as PageName } from '../../src/utils/pages';
import { expect, test } from '@playwright/test';
import {
    aboutMeSectionDataTestId,
    contactBlockSectionDataTestId,
    headerDataTestId,
    homepageBannerContainerDataTestId,
    projectsListDoubleSectionDataTestId,
    servicesBlockSectionDataTestId,
} from '../../src/utils/dataTestIds';
import { urls } from '../utils/selectors';
import { getLocalizedTexts, isSafari, oneMinTimeout } from '../utils/utils';

export const headerNavigationTest = async (
    page: Page,
    pageName: PageName,
    pageTitleDataTestId: string,
    isMobile: boolean,
    locale: Locale,
    otherLocale: Locale,
    browserName: PlaywrightBrowserName,
): Promise<void> => {
    if (isMobile && isSafari(browserName)) {
        test.setTimeout(oneMinTimeout);
    }

    const isHomepage = pageName === 'homepage';
    const isAboutPage = pageName === 'about';
    const isProjectsPage = pageName === 'projects';
    const isServicesPage = pageName === 'services';
    const isContactPage = pageName === 'contact';

    const container = page.getByTestId(headerDataTestId);
    const logo = container.getByAltText('Logo');
    const texts = getLocalizedTexts(locale);
    const { about, projects, services, contact } = texts;
    const otherLocaleTexts = getLocalizedTexts(otherLocale);

    const toggleMenuMobile = async (): Promise<void> => {
        if (isMobile) {
            await page.getByRole('button', { name: 'toggle menu' }).click();
        }
    };

    const goBackToStartingPage = async (): Promise<void> => {
        if (isHomepage) {
            await logo.click();
        } else {
            await container.getByRole('link', { name: texts[pageName] }).click();
        }

        await expect(page).toHaveURL(urls[locale][pageName]);
        await expect(page.getByTestId(pageTitleDataTestId)).toBeVisible();
    };

    // renders logo
    await expect(logo).toBeVisible();

    // clicks on logo and goes to homepage
    await logo.click();
    await expect(page).toHaveURL(urls[locale].homepage);
    await expect(page.getByTestId(homepageBannerContainerDataTestId)).toBeVisible();

    if (!isHomepage) {
        // open the menu if is mobile
        await toggleMenuMobile();

        // navigates back to starting page
        await goBackToStartingPage();
    }

    if (!isAboutPage) {
        // open the menu if is mobile
        await toggleMenuMobile();

        // navigates to about page
        await container.getByRole('link', { name: about }).click();
        await expect(page).toHaveURL(urls[locale].about);
        await expect(page.getByTestId(aboutMeSectionDataTestId)).toBeVisible();

        // open the menu if is mobile
        if (!isHomepage) {
            await toggleMenuMobile();
        }

        // navigates back to starting page
        await goBackToStartingPage();
    }

    if (!isProjectsPage) {
        // open the menu if is mobile
        await toggleMenuMobile();

        // navigates to projects page
        await container.getByRole('link', { name: projects }).click();
        await expect(page).toHaveURL(urls[locale].projects);
        await expect(page.getByTestId(projectsListDoubleSectionDataTestId)).toBeVisible();

        // open the menu if is mobile
        if (!isHomepage) {
            await toggleMenuMobile();
        }

        // navigates back to starting page
        await goBackToStartingPage();
    }

    if (!isServicesPage) {
        // open the menu if is mobile
        await toggleMenuMobile();

        // navigates to services page
        await container.getByRole('link', { name: services }).click();
        await expect(page).toHaveURL(urls[locale].services);
        await expect(page.getByTestId(servicesBlockSectionDataTestId)).toBeVisible();

        // open the menu if is mobile
        if (!isHomepage) {
            await toggleMenuMobile();
        }

        // navigates back to starting page
        await goBackToStartingPage();
    }

    if (!isContactPage) {
        // open the menu if is mobile
        await toggleMenuMobile();

        // navigates to contact page
        await container.getByRole('link', { name: contact }).click();
        await expect(page).toHaveURL(urls[locale].contact);
        await expect(page.getByTestId(contactBlockSectionDataTestId)).toBeVisible();

        // open the menu if is mobile
        if (!isHomepage) {
            await toggleMenuMobile();
        }

        // navigates back to starting page
        await goBackToStartingPage();
    }

    // open the menu if is mobile
    await toggleMenuMobile();

    // switches locale
    await container.getByRole('button', { name: otherLocale, exact: true }).click();
    await expect(page).toHaveURL(urls[otherLocale][pageName]);
    // open the menu again if is mobile so that texts are visible
    await toggleMenuMobile();
    await expect(container.getByRole('link', { name: otherLocaleTexts.about })).toBeVisible();
    await expect(container.getByRole('link', { name: otherLocaleTexts.projects })).toBeVisible();
    await expect(container.getByRole('link', { name: otherLocaleTexts.services })).toBeVisible();
    await expect(container.getByRole('link', { name: otherLocaleTexts.contact })).toBeVisible();

    // switches back to initial locale
    await container.getByRole('button', { name: locale, exact: true }).click();
    await expect(page).toHaveURL(urls[locale][pageName]);
    // open the menu again if is mobile so that texts are visible
    await toggleMenuMobile();
    await expect(container.getByRole('link', { name: about })).toBeVisible();
    await expect(container.getByRole('link', { name: projects })).toBeVisible();
    await expect(container.getByRole('link', { name: services })).toBeVisible();
    await expect(container.getByRole('link', { name: contact })).toBeVisible();
};
