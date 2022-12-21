import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { letsWorkSectionDataTestId } from '../../utils/dataTestIds';
import { getLocalizedTexts } from '../utils/utils';
import { urls } from '../utils/selectors';

export const letsWorkSectionTest = async (page: Page, locale: Locale): Promise<void> => {
    const { letsWork, letsWorkDescription, contact } = getLocalizedTexts(locale);
    const container = page.getByTestId(letsWorkSectionDataTestId);
    const anchor = container.getByRole('link', { name: contact });

    // renders section title
    await expect(container.getByText(letsWork)).toBeVisible();

    // renders text block
    await expect(container.getByText(letsWorkDescription)).toBeVisible();

    // click on button redirects to contact page
    await expect(anchor).toBeVisible();
    await anchor.click();
    await expect(page).toHaveURL(urls[locale].contact);
};
