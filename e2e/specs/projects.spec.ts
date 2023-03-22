import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { projectsListDoubleSectionDataTestId } from '../../utils/dataTestIds';
import { brandsListTest } from '../testBlocks/brandsListTest';
import { footerTest } from '../testBlocks/footerTest';
import { letsWorkSectionTest } from '../testBlocks/letsWorkSectionTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';
import { projectsListDoubleSectionTest } from '../testBlocks/projectsListDoubleSectionTest';

test.describe('PT | Projects page', () => {
    const url = urls.pt.projects;
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'projects',
            projectsListDoubleSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the projects list double section part 1', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            1,
            testInfo
        );
    });

    test('renders the projects list double section part 2', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            2,
            testInfo
        );
    });

    test('renders the projects list double section part 3', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            3,
            testInfo
        );
    });

    test('renders the projects list double section part 4', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            4,
            testInfo
        );
    });

    test('renders the projects list double section part 5', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            5,
            testInfo
        );
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

test.describe('EN | Projects page', () => {
    const url = urls.en.projects;
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'projects',
            projectsListDoubleSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the projects list double section part 1', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            1,
            testInfo
        );
    });

    test('renders the projects list double section part 2', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            2,
            testInfo
        );
    });

    test('renders the projects list double section part 3', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            3,
            testInfo
        );
    });

    test('renders the projects list double section part 4', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            4,
            testInfo
        );
    });

    test('renders the projects list double section part 5', async ({
        page,
        isMobile,
        browserName,
    }, testInfo) => {
        await projectsListDoubleSectionTest(
            page,
            !!isMobile,
            browserName as PlaywrightBrowserName,
            locale,
            5,
            testInfo
        );
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
