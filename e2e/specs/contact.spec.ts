import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { contactBlockTest } from '../testBlocks/contactBlockTest';
import { contactFormTest } from '../testBlocks/contactFormTest';
import { footerTest } from '../testBlocks/footerTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';
import { capitalize } from '../../utils/generic';
import { Page } from '../../utils/pages';
import { getScreenshotPath } from '../utils/utils';

const pageName: Page = 'contact';
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
            contactBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
        );
    });

    test('renders the contact block', async ({ page, isMobile }) => {
        await contactBlockTest(page, !!isMobile, locale);
    });

    test('renders and interacts with the contact form', async ({ page, browserName, isMobile }) => {
        await contactFormTest(page, locale, browserName as PlaywrightBrowserName, !!isMobile);
    });

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });

    test('takes a full page screenshot', async ({ page }) => {
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
            contactBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
        );
    });

    test('renders the contact block', async ({ page, isMobile }) => {
        await contactBlockTest(page, !!isMobile, locale);
    });

    test('renders and interacts with the contact form', async ({ page, browserName, isMobile }) => {
        await contactFormTest(page, locale, browserName as PlaywrightBrowserName, !!isMobile);
    });

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });

    test('takes a full page screenshot', async ({ page }) => {
        await page.waitForLoadState('networkidle');
        // take full page screenshot
        await expect(page).toHaveScreenshot(getScreenshotPath(pageName, locale), {
            fullPage: true,
        });
    });
});
