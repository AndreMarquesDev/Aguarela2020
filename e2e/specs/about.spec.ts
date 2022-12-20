// eslint-disable-next-line import/no-extraneous-dependencies
import { test } from '@playwright/test';
import { urls } from '../../cypress/utils/selectors';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { aboutMeSectionTest } from '../testBlocks/aboutMeSectionTest';

test.describe('PT | About page', () => {
    const locale: Locale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(urls.pt.about);
    });

    test("renders the 'About Me' section", async ({ page, isMobile, browserName }) => {
        await aboutMeSectionTest(page, isMobile, browserName as PlaywrightBrowserName, locale);
    });
});

test.describe('EN | About page', () => {
    const locale: Locale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(urls.en.about);
    });

    test("renders the 'About Me' section", async ({ page, isMobile, browserName }) => {
        await aboutMeSectionTest(page, isMobile, browserName as PlaywrightBrowserName, locale);
    });
});
