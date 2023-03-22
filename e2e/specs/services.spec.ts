import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { servicesBlockSectionDataTestId } from '../../utils/dataTestIds';
import { servicesSectionTest } from '../testBlocks/servicesSectionTest';
import { brandsListTest } from '../testBlocks/brandsListTest';
import { footerTest } from '../testBlocks/footerTest';
import { letsWorkSectionTest } from '../testBlocks/letsWorkSectionTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';

test.describe('PT | Services page', () => {
    const url = urls.pt.services;
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'services',
            servicesBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the services section', async ({ page, isMobile }) => {
        await servicesSectionTest(page, !!isMobile, locale);
    });

    test('renders the brands list section part 1', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await brandsListTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            1,
            testInfo
        );
    });

    test('renders the brands list section part 2', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await brandsListTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            2,
            testInfo
        );
    });

    test('renders the brands list section part 3', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await brandsListTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            3,
            testInfo
        );
    });

    test("renders the let's work section", async ({ page }) => {
        await letsWorkSectionTest(page, locale);
    });

    test('renders the footer', async ({ page, isMobile }, testInfo) => {
        await footerTest(page, !!isMobile, locale, testInfo);
    });
});

test.describe('EN | Services page', () => {
    const url = urls.en.services;
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'services',
            servicesBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the services section', async ({ page, isMobile }) => {
        await servicesSectionTest(page, !!isMobile, locale);
    });

    test('renders the brands list section part 1', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await brandsListTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            1,
            testInfo
        );
    });

    test('renders the brands list section part 2', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await brandsListTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            2,
            testInfo
        );
    });

    test('renders the brands list section part 3', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await brandsListTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            3,
            testInfo
        );
    });

    test("renders the let's work section", async ({ page }) => {
        await letsWorkSectionTest(page, locale);
    });

    test('renders the footer', async ({ page, isMobile }, testInfo) => {
        await footerTest(page, !!isMobile, locale, testInfo);
    });
});
