import type { Page } from '@playwright/test';
import type { Locale } from '../../src/types/Locale';
import { expect } from '@playwright/test';
import { letsWorkSectionDataTestId } from '../../src/utils/dataTestIds';
import { urls } from '../utils/selectors';
import { getLocalizedTexts } from '../utils/utils';

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
