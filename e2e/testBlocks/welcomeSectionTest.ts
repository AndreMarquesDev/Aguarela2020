import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { welcomeSectionDataTestId } from '../../src/utils/dataTestIds';
import { getLocalizedTexts } from '../utils/utils';

export const welcomeSectionTest = async (
    page: Page,
    isMobile: boolean,
    locale: Locale,
): Promise<void> => {
    const {
        welcome1,
        welcome2,
        welcome3,
        managingsocialMedia,
        monitorAndOptimizeProcessAndStrategy,
        throughStrategicPlanning,
    } = getLocalizedTexts(locale);
    const isEnglishVersion = locale === Locale.En;
    const container = page.getByTestId(welcomeSectionDataTestId);

    // renders section title
    // on mobile it's only one element but in desktop it is split into 3 different elements
    if (isMobile) {
        if (isEnglishVersion) {
            await expect(
                container.getByText(`${welcome1}${welcome2}${welcome3}`, { exact: true }),
            ).toBeVisible();
        } else {
            await expect(
                container.getByText(`${welcome1}-${welcome2}${welcome3}`, { exact: true }),
            ).toBeVisible();
        }
    } else {
        await expect(container.getByText(welcome1, { exact: true })).toBeVisible();
        await expect(container.getByText(welcome2, { exact: true })).toBeVisible();
        await expect(container.getByText(welcome3, { exact: true })).toBeVisible();
    }

    // renders text block
    await expect(container.getByText(managingsocialMedia)).toBeVisible();
    await expect(container.getByText(monitorAndOptimizeProcessAndStrategy)).toBeVisible();
    await expect(container.getByText(throughStrategicPlanning)).toBeVisible();
};
