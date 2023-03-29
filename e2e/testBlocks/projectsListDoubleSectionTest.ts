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
    harpoonLinkedInUrl,
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
    getImageDimension,
    getScreenshotPath,
    oneMinTimeout,
} from '../utils/utils';

export const projectsListDoubleSectionTest = async (
    page: Page,
    isMobile: boolean,
    browserName: PlaywrightBrowserName,
    locale: Locale
): Promise<void> => {
    test.setTimeout(oneMinTimeout);

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

    const componentName = 'projectsListDoubleSection';
    const numberOfActiveSlides = isMobile ? 1 : 3;
    const numberOfVisibleSlides = isMobile ? 2 : 6;
    const container = page.getByTestId(projectsListDoubleSectionDataTestId);
    const pageTitle = container.getByText(projects);
    const visibleDoubleSlide = container.locator('.slide-visible');

    const clickNextArrowButton = (): Promise<void> =>
        container.getByTestId(nukaCarouselNextButtonDataTestId).click();

    const testSlide = async (
        brand: string,
        instagramHandle: string,
        url: string,
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
        const imageSize = getImageDimension(
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

        // anchor has the correct url
        await expect(anchor).toBeVisible();
        await expect(anchor).toHaveAttribute('href', url);

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
    await expect(pageTitle).toBeVisible();

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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 3 and 4
    await expect(container).toHaveScreenshot(getScreenshotPath('slide3-4', locale, componentName));

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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 5 and 6
    await expect(container).toHaveScreenshot(getScreenshotPath('slide5-6', locale, componentName));

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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 7 and 8
    await expect(container).toHaveScreenshot(getScreenshotPath('slide7-8', locale, componentName));

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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 9 and 10
    await expect(container).toHaveScreenshot(getScreenshotPath('slide9-10', locale, componentName));

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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 11 and 12
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide11-12', locale, componentName)
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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 13 and 14
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide13-14', locale, componentName)
    );

    await clickNextArrowButton();

    await testSlide(
        'harpoon',
        '@harpoonjobs',
        harpoonLinkedInUrl,
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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 15 and 16
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide15-16', locale, componentName)
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

    // remove focus from slide to hide backface before screenshot
    await pageTitle.click();
    // take screenshot of slides 17 and 18
    await expect(container).toHaveScreenshot(
        getScreenshotPath('slide17-18', locale, componentName)
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
