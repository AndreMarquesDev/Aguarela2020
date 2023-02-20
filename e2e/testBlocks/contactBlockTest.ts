import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { getLocalizedTexts } from '../utils/utils';
import { aguarelaDigitalEmail } from '../../utils/urls';

export const contactBlockTest = async (
    page: Page,
    isMobile: boolean,
    locale: Locale
): Promise<void> => {
    const {
        contactMe1,
        contactMe2,
        contactMe3,
        needHelpWithYourBusiness,
        sendMeAnEmail,
        iAmAvailableToAdvise,
    } = getLocalizedTexts(locale);
    const isEnglishVersion = locale === Locale.En;
    const container = page.getByTestId(contactBlockSectionDataTestId);
    const anchor = container.getByRole('link', { name: aguarelaDigitalEmail });

    // renders section title
    // on mobile it's only one element but in desktop it is split into 3 different elements
    if (isMobile) {
        if (isEnglishVersion) {
            await expect(
                container.getByText(`${contactMe1}${contactMe2}t`, { exact: true })
            ).toBeVisible();
        } else {
            await expect(
                container.getByText(`${contactMe1}${contactMe2}${contactMe3}`, { exact: true })
            ).toBeVisible();
        }
    } else {
        await expect(container.getByText(contactMe1, { exact: true })).toBeVisible();
        await expect(container.getByText(contactMe2, { exact: true })).toBeVisible();
        await expect(container.getByText(contactMe3, { exact: true })).toBeVisible();
    }

    // renders text block
    await expect(container.getByText(needHelpWithYourBusiness)).toBeVisible();
    await expect(container.getByText(sendMeAnEmail)).toBeVisible();
    await expect(container.getByText(iAmAvailableToAdvise)).toBeVisible();

    // button has a 'mailto' link
    await expect(anchor).toBeVisible();
    await expect(anchor).toHaveAttribute('href', `mailto:${aguarelaDigitalEmail}`);
};
