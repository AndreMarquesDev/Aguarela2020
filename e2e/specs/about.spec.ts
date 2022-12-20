// eslint-disable-next-line import/no-extraneous-dependencies
import { test } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { aboutMeSectionTest } from '../testBlocks/aboutMeSectionTest';
import { navigationAboutTest } from '../testBlocks/navigation/navigationAboutPageTest';
import { urls } from '../utils/selectors';

test.describe('PT | About page', () => {
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(urls.pt.about);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await navigationAboutTest(page, !!isMobile, locale, otherLocale);
    });

    test("renders the 'About Me' section", async ({ page, isMobile, browserName }) => {
        await aboutMeSectionTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });
});

test.describe('EN | About page', () => {
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(urls.en.about);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await navigationAboutTest(page, !!isMobile, locale, otherLocale);
    });

    test("renders the 'About Me' section", async ({ page, isMobile, browserName }) => {
        await aboutMeSectionTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });
});
