import type { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import type { Page } from '../../src/utils/pages';
import { expect, test } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import {
    brandsListSectionDataTestId,
    footerDataTestId,
    projectsListDoubleSectionDataTestId,
} from '../../src/utils/dataTestIds';
import { capitalize } from '../../src/utils/generic';
import { brandsListTest } from '../testBlocks/brandsListTest';
import { footerTest } from '../testBlocks/footerTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { letsWorkSectionTest } from '../testBlocks/letsWorkSectionTest';
import { projectsListDoubleSectionTest } from '../testBlocks/projectsListDoubleSectionTest';
import { urls } from '../utils/selectors';
import { getScreenshotPath } from '../utils/utils';

const pageName: Page = 'projects';
const pageNameCapitalized: string = capitalize(pageName);

test.describe(`PT | ${pageNameCapitalized} page`, () => {
    const url = urls.pt[pageName];
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    /* eslint-disable playwright/expect-expect */
    test('renders the header and navigates properly', async ({ page, isMobile, browserName }) => {
        await headerNavigationTest(
            page,
            pageName,
            projectsListDoubleSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName,
        );
    });

    test('renders the projects list double section', async ({ page, isMobile, browserName }) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
        );
    });

    test('renders the brands list section', async ({ page, isMobile, browserName }) => {
        await brandsListTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });

    test("renders the let's work section", async ({ page }) => {
        await letsWorkSectionTest(page, locale);
    });

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });
    /* eslint-enable playwright/expect-expect */

    test('takes a full page screenshot', async ({ page }) => {
        // scroll to bottom of the page to allow brands lists images to load
        await page.getByTestId(brandsListSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(footerDataTestId).scrollIntoViewIfNeeded();
        // eslint-disable-next-line playwright/no-networkidle
        await page.waitForLoadState('networkidle');
        // take full page screenshot
        await expect(page).toHaveScreenshot(getScreenshotPath(pageName, locale), {
            fullPage: true,
        });
    });
});

test.describe(`EN | ${pageNameCapitalized} page`, () => {
    const url = urls.en[pageName];
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    /* eslint-disable playwright/expect-expect */
    test('renders the header and navigates properly', async ({ page, isMobile, browserName }) => {
        await headerNavigationTest(
            page,
            pageName,
            projectsListDoubleSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName,
        );
    });

    test('renders the projects list double section', async ({ page, isMobile, browserName }) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
        );
    });

    test('renders the brands list section', async ({ page, isMobile, browserName }) => {
        await brandsListTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });

    test("renders the let's work section", async ({ page }) => {
        await letsWorkSectionTest(page, locale);
    });

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });
    /* eslint-enable playwright/expect-expect */

    test('takes a full page screenshot', async ({ page }) => {
        // scroll to bottom of the page to allow brands lists images to load
        await page.getByTestId(brandsListSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(footerDataTestId).scrollIntoViewIfNeeded();
        // eslint-disable-next-line playwright/no-networkidle
        await page.waitForLoadState('networkidle');
        // take full page screenshot
        await expect(page).toHaveScreenshot(getScreenshotPath(pageName, locale), {
            fullPage: true,
        });
    });
});
