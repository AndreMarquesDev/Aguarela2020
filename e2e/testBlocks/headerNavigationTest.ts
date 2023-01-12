import { Page, expect } from '@playwright/test';
import { Page as PageName } from '../../utils/pages';
import { Locale } from '../../types/Locale';
import {
    headerDataTestId,
    homepageBannerContainerDataTestId,
    contactBlockSectionDataTestId,
    projectsListDoubleSectionDataTestId,
    servicesBlockSectionDataTestId,
    aboutMeSectionDataTestId,
} from '../../utils/dataTestIds';
import { urls } from '../utils/selectors';
import { getLocalizedTexts, openMenuMobile } from '../utils/utils';

export const headerNavigationTest = async (
    page: Page,
    pageName: Exclude<PageName, 'homepage'>,
    pageTitleDataTestId: string,
    isMobile: boolean,
    locale: Locale,
    otherLocale: Locale
): Promise<void> => {
    const container = page.getByTestId(headerDataTestId);
    const image = container.getByAltText('Logo');
    const texts = getLocalizedTexts(locale);
    const { about, projects, services, contact } = texts;
    const otherLocaleTexts = getLocalizedTexts(otherLocale);

    const goBackToStartingPage = async (): Promise<void> => {
        await container.getByRole('link', { name: texts[pageName] }).click();
        await expect(page).toHaveURL(urls[locale][pageName]);
        await expect(page.getByTestId(pageTitleDataTestId)).toBeVisible();
    };

    // renders logo
    await expect(image).toBeVisible();

    // clicks on logo and goes to homepage
    await image.click();
    await expect(page).toHaveURL(urls[locale].homepage);
    await expect(page.getByTestId(homepageBannerContainerDataTestId)).toBeVisible();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates back to starting page
    await goBackToStartingPage();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates to about page
    await container.getByRole('link', { name: about }).click();
    await expect(page).toHaveURL(urls[locale].about);
    await expect(page.getByTestId(aboutMeSectionDataTestId)).toBeVisible();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates back to starting page
    await goBackToStartingPage();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates to projects page
    await container.getByRole('link', { name: projects }).click();
    await expect(page).toHaveURL(urls[locale].projects);
    await expect(page.getByTestId(projectsListDoubleSectionDataTestId)).toBeVisible();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates back to starting page
    await goBackToStartingPage();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates to services page
    await container.getByRole('link', { name: services }).click();
    await expect(page).toHaveURL(urls[locale].services);
    await expect(page.getByTestId(servicesBlockSectionDataTestId)).toBeVisible();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates back to starting page
    await goBackToStartingPage();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates to contact page
    await container.getByRole('link', { name: contact }).click();
    await expect(page).toHaveURL(urls[locale].contact);
    await expect(page.getByTestId(contactBlockSectionDataTestId)).toBeVisible();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // navigates back to starting page
    await goBackToStartingPage();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // switches locale
    await container.getByRole('button', { name: otherLocale, exact: true }).click();
    await expect(page).toHaveURL(urls[otherLocale][pageName]);
    // open the menu again if is mobile so that texts are visible
    openMenuMobile(page, isMobile);
    await expect(container.getByRole('link', { name: otherLocaleTexts.about })).toBeVisible();
    await expect(container.getByRole('link', { name: otherLocaleTexts.projects })).toBeVisible();
    await expect(container.getByRole('link', { name: otherLocaleTexts.services })).toBeVisible();
    await expect(container.getByRole('link', { name: otherLocaleTexts.contact })).toBeVisible();

    // open the menu if is mobile
    openMenuMobile(page, isMobile);

    // switches back to initial locale
    await container.getByRole('button', { name: locale, exact: true }).click();
    await expect(page).toHaveURL(urls[locale][pageName]);
    // open the menu again if is mobile so that texts are visible
    openMenuMobile(page, isMobile);
    await expect(container.getByRole('link', { name: about })).toBeVisible();
    await expect(container.getByRole('link', { name: projects })).toBeVisible();
    await expect(container.getByRole('link', { name: services })).toBeVisible();
    await expect(container.getByRole('link', { name: contact })).toBeVisible();
};
