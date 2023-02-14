import { test, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { contactBlockTest } from '../testBlocks/contactBlockTest';
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

    test('renders the footer', async ({ page, isMobile }) => {
        await footerTest(page, !!isMobile, locale);
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

    test('renders the footer', async ({ page, isMobile }) => {
        await footerTest(page, !!isMobile, locale);
    });
});
