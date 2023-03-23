import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { brandsListSectionDataTestId } from '../../utils/dataTestIds';
import {
    aAmigaEsteticistaInstagramUrl,
    avocadoInstagramUrl,
    biergartenInstagramUrl,
    bovineInstagramUrl,
    guacamoleInstagramUrl,
    harpoonLinkedInUrl,
    icecreamRollInstagramUrl,
    kaffeehausInstagramUrl,
    luminousInstagramUrl,
    madMaryInstagramUrl,
    mariaLimaoInstagramUrl,
    pernodWebsiteUrl,
    quatroPatasDe5EstrelasInstagramUrl,
    riceMeDeliInstagramUrl,
    riceMeInstagramUrl,
    tasteOfIndiaInstagramUrl,
    tjelaInstagramUrl,
    trattoriaInstagramUrl,
} from '../../utils/urls';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import { getLocalizedTexts, getImageDimension } from '../utils/utils';

export const brandsListTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    const container = page.getByTestId(brandsListSectionDataTestId);
    const { myNetwork } = getLocalizedTexts(locale);

    const testLogo = async (brand: string, url: string): Promise<void> => {
        const anchor = container.getByRole('link', { name: brand, exact: true });
        const image = container.getByAltText(`${brand} logo`);
        const imageBoundingBox = await image.boundingBox();
        const imageSizeDesktop = 150;
        const imageSizeMobileChrome = 108;
        const imageSizeMobileSafari = 107;
        const imageSize = getImageDimension(
            isMobile,
            browserName,
            imageSizeDesktop,
            imageSizeMobileChrome,
            imageSizeMobileSafari
        );

        // renders the image
        await image.scrollIntoViewIfNeeded();
        await expect(image).toBeVisible();
        expect(Math.round(imageBoundingBox?.width || 0)).toEqual(imageSize);
        expect(Math.round(imageBoundingBox?.height || 0)).toEqual(imageSize);

        // image has an anchor tag
        await expect(anchor).toBeVisible();
        await expect(anchor).toHaveAttribute('href', url);
    };

    // renders section title
    await expect(container.getByText(myNetwork)).toBeVisible();

    // renders all the brand logos
    await testLogo('avocado', avocadoInstagramUrl);
    await testLogo('pernod', pernodWebsiteUrl);
    await testLogo('tjela', tjelaInstagramUrl);
    await testLogo('guacamole', guacamoleInstagramUrl);
    await testLogo('kaffeehaus', kaffeehausInstagramUrl);
    await testLogo('taste of india', tasteOfIndiaInstagramUrl);
    await testLogo('icecream roll', icecreamRollInstagramUrl);
    await testLogo('marialimao', mariaLimaoInstagramUrl);
    await testLogo('biergarten', biergartenInstagramUrl);
    await testLogo('trattoria', trattoriaInstagramUrl);
    await testLogo('a amiga esteticista', aAmigaEsteticistaInstagramUrl);
    await testLogo('rice me deli', riceMeDeliInstagramUrl);
    await testLogo('4 patas de 5 estrelas', quatroPatasDe5EstrelasInstagramUrl);
    await testLogo('rice me', riceMeInstagramUrl);
    await testLogo('luminous', luminousInstagramUrl);
    await testLogo('mad mary', madMaryInstagramUrl);
    await testLogo('harpoon', harpoonLinkedInUrl);
    await testLogo('bovine', bovineInstagramUrl);
};
