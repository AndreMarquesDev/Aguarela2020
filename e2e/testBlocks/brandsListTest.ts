import { Page, expect, test } from '@playwright/test';
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
import {
    getLocalizedTexts,
    getImageDimension,
    isFirefox,
    isSafari,
    oneAndAHalfMinTimeout,
    openNewTab,
} from '../utils/utils';

export const brandsListTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    if (isSafari(browserName) || isFirefox(browserName) || isMobile) {
        test.setTimeout(oneAndAHalfMinTimeout);
    }

    const container = page.getByTestId(brandsListSectionDataTestId);
    const { myNetwork } = getLocalizedTexts(locale);

    const testLogo = async (brand: string, url: string | RegExp): Promise<void> => {
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
