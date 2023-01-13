import { Page, expect, test } from '@playwright/test';
import { Locale } from '../../types/Locale';
import { PlaywrightBrowserName } from '../../types/PlaywrightBrowserName';
import {
    nukaCarouselNextButtonDataTestId,
    projectItemTouchDivDataTestId,
    projectsListDoubleSectionDataTestId,
} from '../../utils/dataTestIds';
import {
    aAmigaEsteticistaIndustriaCriativaUrl,
    anaroIndustriaCriativaUrl,
    avocadoInstagramUrl,
    beefeaterWebsiteUrl,
    biergartenInstagramUrl,
    bovineInstagramUrl,
    catarinaSantiagoInstagramUrl,
    guacamoleInstagramUrl,
    icecreamRollInstagramUrl,
    jamesonInstagramUrl,
    kaffeehausInstagramUrl,
    luminousInstagramUrl,
    madMaryInstagramUrl,
    mariaLimaoIndustriaCriativaUrl,
    quatroPatasDe5EstrelasInstagramUrl,
    riceMeDeliInstagramUrl,
    riceMeInstagramUrl,
    tasteOfIndiaInstagramUrl,
    tjelaInstagramUrl,
} from '../../utils/urls';
import {
    clickNextArrowButtonIfMobile,
    getLocalizedTexts,
    getSlidesImageSize,
    isFirefox,
    isSafari,
    oneAndAHalfMinTimeout,
    openNewTab,
    twoAndAHalfMinTimeout,
} from '../utils/utils';

export const projectsListDoubleSectionTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    if (isSafari(browserName) || isFirefox(browserName)) {
        test.setTimeout(twoAndAHalfMinTimeout);
    } else {
        test.setTimeout(oneAndAHalfMinTimeout);
    }

    const {
        projects,
        socialMediaAndContentCreation,
        present,
        socialMediaManagement,
        contentCreation,
        consultingAndContentCreation,
        socialMediaAndPaidSocial,
        inPartnershipWith,
    } = getLocalizedTexts(locale);

    const numberOfActiveSlides = isMobile ? 1 : 3;
    const numberOfVisibleSlides = isMobile ? 2 : 6;
    const container = page.getByTestId(projectsListDoubleSectionDataTestId);
    const visibleDoubleSlide = container.locator('.slide-visible');

    const clickNextArrowButton = (): Promise<void> =>
        container.getByTestId(nukaCarouselNextButtonDataTestId).click();

    const testSlide = async (
        brand: string,
        instagramHandle: string,
        url: string | RegExp,
        title: string,
        isInPartnership: boolean,
        year?: string
    ): Promise<void> => {
        const slide = container.getByTestId(`${projectItemTouchDivDataTestId}_${brand}`);
        const anchor = slide.getByRole('link', { name: instagramHandle });
        const image = container.getByAltText(brand, { exact: true });
        const imageBoundingBox = await image.boundingBox();
        const imageSizeDesktop = 313;
        const imageSizeMobileChrome = 281;
        const imageSizeMobileSafari = 278;
        const imageSize = getSlidesImageSize(
            isMobile,
            browserName,
            imageSizeDesktop,
            imageSizeMobileChrome,
            imageSizeMobileSafari
        );

        // renders the image
        await expect(image).toBeVisible();
        expect(Math.round(imageBoundingBox?.width || 0)).toEqual(imageSize);
        expect(Math.round(imageBoundingBox?.height || 0)).toEqual(imageSize);

        // hovers over the image to show backface
        await expect(anchor).toBeHidden();
        await slide.hover();
        await expect(anchor).toBeVisible();

        // clicks on link to instagram
        await openNewTab(page, anchor, url);

        // after the click, the backface is hidden again sometimes
        await slide.hover();
        await expect(slide.getByText(title)).toBeVisible();

        if (year) {
            await expect(slide.getByText(year)).toBeVisible();
        }

        if (isInPartnership) {
            await expect(slide.getByText(`* ${inPartnershipWith}`)).toBeVisible();
        }
    };

    // renders page title
    await expect(container.getByText(projects)).toBeVisible();

    // asserts number of visible slides
    const visibleDoubleSlides = await visibleDoubleSlide.all();
    const visibleSlides = await visibleDoubleSlide.getByRole('img').all();

    expect(visibleDoubleSlides).toHaveLength(numberOfActiveSlides);
    expect(visibleSlides).toHaveLength(numberOfVisibleSlides);

    visibleDoubleSlides.forEach(doubleSlide => expect(doubleSlide).toBeVisible());
    visibleSlides.forEach(slide => expect(slide).toBeVisible());

    // renders slides
    await testSlide(
        'tjela',
        '@tudonatjela',
        tjelaInstagramUrl,
        socialMediaAndContentCreation,
        true,
        `2020 - ${present}`
    );

    await testSlide(
        'taste of india',
        '@tasteofindia',
        tasteOfIndiaInstagramUrl,
        socialMediaAndContentCreation,
        true,
        `2020 - ${present}`
    );

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSlide(
        'kaffeehaus',
        '@kaffeehaus_lisboa',
        kaffeehausInstagramUrl,
        socialMediaAndContentCreation,
        false,
        `2018 - ${present}`
    );

    await testSlide(
        'avocado',
        '@avocadohouselisbon',
        avocadoInstagramUrl,
        socialMediaAndContentCreation,
        true,
        `2020 - ${present}`
    );

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSlide(
        'guacamole',
        '@guacamolegmg',
        guacamoleInstagramUrl,
        socialMediaAndContentCreation,
        true,
        `2019 - ${present}`
    );

    await testSlide(
        'marialimao',
        '@bebemarialimao',
        mariaLimaoIndustriaCriativaUrl,
        socialMediaAndContentCreation,
        false,
        '2019 - 2020'
    );

    await clickNextArrowButton();

    await testSlide(
        'jameson',
        '@jamesonportugal',
        jamesonInstagramUrl,
        socialMediaManagement,
        false,
        `2019 - ${present}`
    );

    await testSlide(
        'beefeater',
        '@beefeater',
        beefeaterWebsiteUrl,
        socialMediaManagement,
        false,
        `2019 - ${present}`
    );

    await clickNextArrowButton();

    await testSlide(
        'biergarten',
        '@biergarten',
        biergartenInstagramUrl,
        socialMediaAndContentCreation,
        false,
        '2019'
    );

    await testSlide(
        'mad mary',
        '@madmarycuisine',
        madMaryInstagramUrl,
        socialMediaAndContentCreation,
        false,
        '2019'
    );

    await clickNextArrowButton();

    await testSlide(
        'bovine',
        '@bovinelisboa',
        bovineInstagramUrl,
        socialMediaAndContentCreation,
        false,
        '2020'
    );

    await testSlide(
        'icecream roll',
        '@icecreamroll.pt',
        icecreamRollInstagramUrl,
        socialMediaAndContentCreation,
        false,
        '2018'
    );

    await clickNextArrowButton();

    await testSlide(
        'rice me',
        '@ricemerestaurante',
        riceMeInstagramUrl,
        socialMediaAndContentCreation,
        false,
        '2020'
    );

    await testSlide(
        'rice me deli',
        '@ricemedeli',
        riceMeDeliInstagramUrl,
        socialMediaAndContentCreation,
        false,
        '2020'
    );

    await clickNextArrowButton();

    await testSlide(
        'harpoon',
        '@harpoonjobs',
        /.*harpoon-lda/,
        socialMediaAndContentCreation,
        false,
        '2020 - 2021'
    );

    await testSlide(
        'catarina santiago',
        '@catarinasantiago',
        catarinaSantiagoInstagramUrl,
        contentCreation,
        false
    );

    await clickNextArrowButton();

    await testSlide(
        '4 patas de 5 estrelas',
        '@4patasde5estrelas',
        quatroPatasDe5EstrelasInstagramUrl,
        socialMediaManagement,
        false,
        `2020 - ${present}`
    );

    await testSlide(
        'luminous',
        '@becomeluminous',
        luminousInstagramUrl,
        socialMediaAndPaidSocial,
        true,
        '2020'
    );

    await clickNextArrowButton();

    await testSlide(
        'a amiga esteticista',
        '@aamigaesteticista',
        aAmigaEsteticistaIndustriaCriativaUrl,
        consultingAndContentCreation,
        false,
        `2017 - ${present}`
    );

    await testSlide(
        'AnaRo',
        '@anaro.artistpage',
        anaroIndustriaCriativaUrl,
        consultingAndContentCreation,
        false,
        '2019'
    );
};
