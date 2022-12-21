// eslint-disable-next-line import/no-extraneous-dependencies
import { Page, expect } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { brandsListSectionDataTestId } from '../../utils/dataTestIds';
import {
    aAmigaEsteticistaInstagramUrl,
    avocadoInstagramUrl,
    biergartenInstagramUrl,
    bovineInstagramUrl,
    guacamoleInstagramUrl,
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
import { getLocalizedTexts, openNewTab } from '../utils/utils';

const getImageSizes = (
    isMobile: boolean | undefined,
    browserName: PlaywrightBrowserName
): { imageWidth: number; imageHeight: number } => {
    const widthDesktop = 150;
    const widthMobileChrome = 107.65625;
    const widthMobileSafari = 106.65625;

    const heightDesktop = 150;
    const heightMobileChrome = 107.65625;
    const heightMobileSafari = 106.65625;

    if (!isMobile) {
        return { imageWidth: widthDesktop, imageHeight: heightDesktop };
    }

    if (browserName === PlaywrightBrowserName.Chromium) {
        return { imageWidth: widthMobileChrome, imageHeight: heightMobileChrome };
    }

    return { imageWidth: widthMobileSafari, imageHeight: heightMobileSafari };
};

export const brandsListTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    const container = page.getByTestId(brandsListSectionDataTestId);
    const { myNetwork } = getLocalizedTexts(locale);

    const testLogo = async (brand: string, url: string | RegExp): Promise<void> => {
        const image = container.getByAltText(`${brand} logo`);
        const imageBoundingBox = await image.boundingBox();
        const anchor = container.getByRole('link', { name: brand, exact: true });
        const { imageWidth, imageHeight } = getImageSizes(isMobile, browserName);

        // renders the image
        image.scrollIntoViewIfNeeded();
        await expect(image).toBeVisible();
        expect(imageBoundingBox?.width).toEqual(imageWidth);
        expect(imageBoundingBox?.height).toEqual(imageHeight);

        // clicking on the logo links to the brand's assigned url
        await openNewTab(page, anchor, url, 10000);
    };

    // renders section title
    await expect(container.getByText(myNetwork)).toBeVisible();

    // renders all the brand logos
    await testLogo('avocado', avocadoInstagramUrl);
    await testLogo('pernod', `${pernodWebsiteUrl}/en`);
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
    await testLogo('harpoon', /.*harpoon-lda/);
    await testLogo('bovine', bovineInstagramUrl);
};
