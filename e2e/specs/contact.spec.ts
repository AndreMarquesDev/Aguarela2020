import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { contactBlockTest } from '../testBlocks/contactBlockTest';
import { contactFormTest } from '../testBlocks/contactFormTest';
import { footerTest } from '../testBlocks/footerTest';
import { headerNavigationTest } from '../testBlocks/headerNavigationTest';
import { urls } from '../utils/selectors';

test.describe('PT | Contact page', () => {
    const url = urls.pt.contact;
    const locale = Locale.Pt;
    const otherLocale = Locale.En;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'contact',
            contactBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the contact block', async ({ page, isMobile }) => {
        await contactBlockTest(page, !!isMobile, locale);
    });

    test('renders and interacts with the contact form', async ({ page, browserName }) => {
        await contactFormTest(page, locale, browserName as PlaywrightBrowserName);
    });

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });
});

test.describe('EN | Contact page', () => {
    const url = urls.en.contact;
    const locale = Locale.En;
    const otherLocale = Locale.Pt;

    test.beforeEach(async ({ page }) => {
        await page.goto(url);

        await expect(page).toHaveURL(url);
    });

    test('renders the header and navigates properly', async ({ page, isMobile }) => {
        await headerNavigationTest(
            page,
            'contact',
            contactBlockSectionDataTestId,
            !!isMobile,
            locale,
            otherLocale
        );
    });

    test('renders the contact block', async ({ page, isMobile }) => {
        await contactBlockTest(page, !!isMobile, locale);
    });

    test('renders and interacts with the contact form', async ({ page, browserName }) => {
        await contactFormTest(page, locale, browserName as PlaywrightBrowserName);
    });

    test('renders the footer', async ({ page }) => {
        await footerTest(page, locale);
    });
});
