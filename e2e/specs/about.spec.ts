import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { aboutMeSectionDataTestId } from '../../utils/dataTestIds';
import { aboutMeSectionTest } from '../testBlocks/aboutMeSectionTest';
import { brandsListTest } from '../testBlocks/brandsListTest';
import { footerTest } from '../testBlocks/footerTest';
import { letsWorkSectionTest } from '../testBlocks/letsWorkSectionTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';

test.describe('PT | About page', () => {
    const url = urls.pt.about;
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile, browserName }) => {
        await headerNavigationTest(
            page,
            'about',
            aboutMeSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
        );
    });

    test('renders the about me section', async ({ page, isMobile, browserName }) => {
        await aboutMeSectionTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
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
});

test.describe('EN | About page', () => {
    const url = urls.en.about;
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile, browserName }) => {
        await headerNavigationTest(
            page,
            'about',
            aboutMeSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
        );
    });

    test('renders the about me section', async ({ page, isMobile, browserName }) => {
        await aboutMeSectionTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
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
});
