import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { footerDataTestId } from '../../utils/dataTestIds';
import { getLocalizedTexts } from '../utils/utils';
import {
    andreMarquesDevWebsiteUrl,
    aguarelaDigitalInstagramUrl,
    aguarelaDigitalFacebookUrl,
} from '../../utils/urls';
import { urls } from '../utils/selectors';

export const footerTest = async (page: Page, locale: Locale): Promise<void> => {
    const { footerInfo } = getLocalizedTexts(locale);

    const container = page.getByTestId(footerDataTestId);
    const andreMarquesDevAnchor = container.getByRole('link', { name: 'André Marques' });
    const instagramAnchor = container.getByRole('link', { name: 'Aguarela instagram' });
    const facebookAnchor = container.getByRole('link', { name: 'Aguarela facebook' });
    const contactPageAnchor = container.getByRole('link', { name: 'Go to contact page' });

    // renders the 'developed by' text
    await expect(container.getByText(`${footerInfo} André Marques`)).toBeVisible();

    // renders the social links
    await expect(instagramAnchor).toBeVisible();
    await expect(instagramAnchor).toHaveAttribute('href', aguarelaDigitalInstagramUrl);
    await expect(facebookAnchor).toBeVisible();
    await expect(facebookAnchor).toHaveAttribute('href', aguarelaDigitalFacebookUrl);

    // clicking on 'André Marques' links to AndreMarquesDev website
    await expect(andreMarquesDevAnchor).toBeVisible();
    await expect(andreMarquesDevAnchor).toHaveAttribute('href', andreMarquesDevWebsiteUrl);

    // clicking on mail icon redirects to contact page
    await expect(contactPageAnchor).toBeVisible();
    await contactPageAnchor.click();
    await expect(page).toHaveURL(urls[locale].contact);
};
