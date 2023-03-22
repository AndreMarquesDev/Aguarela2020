import { Page, expect, TestInfo } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { footerDataTestId } from '../../utils/dataTestIds';
import { getInstagramFallbackUrl, getLocalizedTexts, openNewTab } from '../utils/utils';
import {
    andreMarquesDevWebsiteUrl,
    aguarelaDigitalInstagramUrl,
    aguarelaDigitalFacebookUrl,
} from '../../utils/urls';
import { urls } from '../utils/selectors';

export const footerTest = async (
    page: Page,
    isMobile: boolean,
    locale: Locale,
    testInfo: TestInfo
): Promise<void> => {
    const isRetry = !!testInfo.retry;

    const { footerInfo } = getLocalizedTexts(locale);

    const container = page.getByTestId(footerDataTestId);
    const andreMarquesDevAnchor = container.getByRole('link', { name: 'André Marques' });
    const instagramAnchor = container.getByRole('link', { name: 'Aguarela instagram' });
    const facebookAnchor = container.getByRole('link', { name: 'Aguarela facebook' });
    const contactPageAnchor = container.getByRole('link', { name: 'Go to contact page' });
    const facebookUrl = isMobile
        ? /.*https:\/\/m.facebook.com\/aguareladigitalpt/
        : aguarelaDigitalFacebookUrl;

    // renders the 'developed by' text
    await expect(container.getByText(`${footerInfo} André Marques`)).toBeVisible();

    // clicking on 'André Marques' links to AndreMarquesDev website
    await openNewTab(page, andreMarquesDevAnchor, andreMarquesDevWebsiteUrl);

    // renders the social links
    if (isRetry) {
        const fallbackUrl = getInstagramFallbackUrl(aguarelaDigitalInstagramUrl);

        await openNewTab(page, instagramAnchor, fallbackUrl);
    } else {
        await openNewTab(page, instagramAnchor, aguarelaDigitalInstagramUrl);
    }
    await openNewTab(page, facebookAnchor, facebookUrl);

    // clicking on 'André Marques' links to AndreMarquesDev website
    await openNewTab(page, andreMarquesDevAnchor, andreMarquesDevWebsiteUrl);

    // clicking on mail icon redirects to contact page
    await expect(contactPageAnchor).toBeVisible();
    await contactPageAnchor.click();
    await expect(page).toHaveURL(urls[locale].contact);
};
