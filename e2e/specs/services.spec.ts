import { test, expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import {
    brandsListSectionDataTestId,
    footerDataTestId,
    servicesBlockSectionDataTestId,
} from '../../src/utils/dataTestIds';
import { servicesSectionTest } from '../testBlocks/servicesSectionTest';
import { brandsListTest } from '../testBlocks/brandsListTest';
import { footerTest } from '../testBlocks/footerTest';
import { letsWorkSectionTest } from '../testBlocks/letsWorkSectionTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';
import { getScreenshotPath } from '../utils/utils';
import { Page } from '../../src/utils/pages';
import { capitalize } from '../../src/utils/generic';

const pageName: Page = 'services';
const pageNameCapitalized: string = capitalize(pageName);

test.describe(`PT | ${pageNameCapitalized} page`, () => {
    const url = urls.pt[pageName];
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile, browserName }) => {
        await headerNavigationTest(
            page,
            pageName,
            servicesBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
        );
    });

    test('renders the services section', async ({ page, isMobile }) => {
        await servicesSectionTest(page, !!isMobile, locale);
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

    test('takes a full page screenshot', async ({ page }) => {
        // scroll to bottom of the page to allow brands lists images to load
        await page.getByTestId(brandsListSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(footerDataTestId).scrollIntoViewIfNeeded();
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

    test('renders the header and navigates properly', async ({ page, isMobile, browserName }) => {
        await headerNavigationTest(
            page,
            pageName,
            servicesBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
        );
    });

    test('renders the services section', async ({ page, isMobile }) => {
        await servicesSectionTest(page, !!isMobile, locale);
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

    test('takes a full page screenshot', async ({ page }) => {
        // scroll to bottom of the page to allow brands lists images to load
        await page.getByTestId(brandsListSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(footerDataTestId).scrollIntoViewIfNeeded();
        await page.waitForLoadState('networkidle');
        // take full page screenshot
        await expect(page).toHaveScreenshot(getScreenshotPath(pageName, locale), {
            fullPage: true,
        });
    });
});
