import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { footerDataTestId } from '../../utils/dataTestIds';
import { getLocalizedTexts, openNewTab } from '../utils/utils';
import {
    andreMarquesDevWebsiteUrl,
    aguarelaDigitalInstagramUrl,
    aguarelaDigitalFacebookUrl,
} from '../../utils/urls';
import { urls } from '../utils/selectors';

export const footerTest = async (page: Page, isMobile: boolean, locale: Locale): Promise<void> => {
    const { footerInfo } = getLocalizedTexts(locale);
    const container = page.getByTestId(footerDataTestId);
    const andreMarquesDevAnchor = container.getByRole('link', { name: 'André Marques' });
    const instagramAnchor = container.getByRole('link', { name: 'Aguarela instagram' });
    const facebookAnchor = container.getByRole('link', { name: 'Aguarela facebook' });
    const contactPageAnchor = container.getByRole('link', { name: 'Go to contact page' });
    const facebookUrl = isMobile
        ? 'https://m.facebook.com/aguareladigitalagency'
        : aguarelaDigitalFacebookUrl;

    // renders the 'developed by' text
    await expect(container.getByText(`${footerInfo} André Marques`)).toBeVisible();

    // clicking on 'André Marques' links to AndreMarquesDev website
    await openNewTab(page, andreMarquesDevAnchor, andreMarquesDevWebsiteUrl);

    // renders the social links
    await openNewTab(page, instagramAnchor, aguarelaDigitalInstagramUrl);
    await openNewTab(page, facebookAnchor, facebookUrl);

    // clicking on 'André Marques' links to AndreMarquesDev website
    await openNewTab(page, andreMarquesDevAnchor, andreMarquesDevWebsiteUrl);

    // clicking on mail icon redirects to contact page
    await expect(contactPageAnchor).toBeVisible();
    await contactPageAnchor.click();
    await expect(page).toHaveURL(urls[locale].contact);
};
