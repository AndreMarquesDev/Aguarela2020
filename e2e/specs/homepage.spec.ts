import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { skillsBlockSectionDataTestId } from '../../utils/dataTestIds';
import { brandsListTest } from '../testBlocks/brandsListTest';
import { footerTest } from '../testBlocks/footerTest';
import { letsWorkSectionTest } from '../testBlocks/letsWorkSectionTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';
import { bannerTest } from '../testBlocks/bannerTest';
import { welcomeSectionTest } from '../testBlocks/welcomeSectionTest';
import { skillsBlockTest } from '../testBlocks/skillsBlockTest';
import { workflowSectionTest } from '../testBlocks/workflowSectionTest';
import { projectsSectionTest } from '../testBlocks/projectsSectionTest';

test.describe('PT | Homepage', () => {
    const url = urls.pt.homepage;
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'homepage',
            skillsBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the banner', async ({ page, isMobile, browserName }) => {
        await bannerTest(page, !!isMobile, browserName as PlaywrightBrowserName);
    });

    test('renders the welcome section', async ({ page, isMobile }) => {
        await welcomeSectionTest(page, !!isMobile, locale);
    });

    test('renders the skills section', async ({ page, isMobile }) => {
        await skillsBlockTest(page, !!isMobile, locale);
    });

    test('renders the workflow section', async ({ page }) => {
        await workflowSectionTest(page, locale);
    });

    test('renders the projects section', async ({ page, isMobile, browserName }) => {
        await projectsSectionTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });

    test('renders the brands list section', async ({ page, isMobile, browserName }) => {
        await brandsListTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });

    test("renders the let's work section", async ({ page }) => {
        await letsWorkSectionTest(page, locale);
    });

    test('renders the footer', async ({ page, isMobile }) => {
        await footerTest(page, !!isMobile, locale);
    });
});

test.describe('EN | Homepage', () => {
    const url = urls.en.homepage;
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'homepage',
            skillsBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the banner', async ({ page, isMobile, browserName }) => {
        await bannerTest(page, !!isMobile, browserName as PlaywrightBrowserName);
    });

    test('renders the welcome section', async ({ page, isMobile }) => {
        await welcomeSectionTest(page, !!isMobile, locale);
    });

    test('renders the skills section', async ({ page, isMobile }) => {
        await skillsBlockTest(page, !!isMobile, locale);
    });

    test('renders the workflow section', async ({ page }) => {
        await workflowSectionTest(page, locale);
    });

    test('renders the projects section', async ({ page, isMobile, browserName }) => {
        await projectsSectionTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });

    test('renders the brands list section', async ({ page, isMobile, browserName }) => {
        await brandsListTest(page, !!isMobile, browserName as PlaywrightBrowserName, locale);
    });

    test("renders the let's work section", async ({ page }) => {
        await letsWorkSectionTest(page, locale);
    });

    test('renders the footer', async ({ page, isMobile }) => {
        await footerTest(page, !!isMobile, locale);
    });
});
