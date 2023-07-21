import { test, expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { PlaywrightBrowserName } from '../../src/types/PlaywrightBrowserName';
import {
    brandsListSectionDataTestId,
    footerDataTestId,
    homepageBannerContainerDataTestId,
    skillsBlockSectionDataTestId,
} from '../../src/utils/dataTestIds';
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
import { capitalize } from '../../src/utils/generic';
import { Page } from '../../src/utils/pages';
import { getScreenshotPath } from '../utils/utils';

const pageName: Page = 'homepage';
const pageNameCapitalized: string = capitalize(pageName);

test.describe(`PT | ${pageNameCapitalized}`, () => {
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
            skillsBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
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

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });
    /* eslint-enable playwright/expect-expect */

    test('takes a full page screenshot', async ({ page, isMobile }) => {
        // scroll to bottom of the page to allow banner, skills and brands lists images to load
        await page.getByTestId(homepageBannerContainerDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(skillsBlockSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(brandsListSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(footerDataTestId).scrollIntoViewIfNeeded();
        // eslint-disable-next-line playwright/no-networkidle
        await page.waitForLoadState('networkidle');
        // take full page screenshot
        await expect(page).toHaveScreenshot(getScreenshotPath(pageName, locale), {
            fullPage: true,
        });

        // eslint-disable-next-line playwright/no-conditional-in-test
        if (isMobile) {
            // open menu
            await page.getByRole('button', { name: 'toggle menu' }).click();
            // take screenshot of slide backface
            await expect(page).toHaveScreenshot(getScreenshotPath('menu-mobile', locale), {
                fullPage: true,
            });
        }
    });
});

test.describe(`EN | ${pageNameCapitalized}`, () => {
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
            skillsBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale,
            browserName as PlaywrightBrowserName
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

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });
    /* eslint-enable playwright/expect-expect */

    test('takes a full page screenshot', async ({ page, isMobile }) => {
        // scroll to bottom of the page to allow banner, skills and brands lists images to load
        await page.getByTestId(homepageBannerContainerDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(skillsBlockSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(brandsListSectionDataTestId).scrollIntoViewIfNeeded();
        await page.getByTestId(footerDataTestId).scrollIntoViewIfNeeded();
        // eslint-disable-next-line playwright/no-networkidle
        await page.waitForLoadState('networkidle');
        // take full page screenshot
        await expect(page).toHaveScreenshot(getScreenshotPath(pageName, locale), {
            fullPage: true,
        });

        // eslint-disable-next-line playwright/no-conditional-in-test
        if (isMobile) {
            // open menu
            await page.getByRole('button', { name: 'toggle menu' }).click();
            // take screenshot of slide backface
            await expect(page).toHaveScreenshot(getScreenshotPath('menu-mobile', locale), {
                fullPage: true,
            });
        }
    });
});
