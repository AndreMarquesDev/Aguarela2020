import type { Page } from '@playwright/test';
import type { Locale } from '../../src/types/Locale';
import { expect } from '@playwright/test';
import {
    skillsBlockItemWrapperDataTestId,
    skillsBlockSectionDataTestId,
} from '../../src/utils/dataTestIds';
import { clickNextArrowButtonIfMobile, getLocalizedTexts } from '../utils/utils';

export const skillsBlockTest = async (
    page: Page,
    isMobile: boolean,
    locale: Locale,
): Promise<void> => {
    const {
        skills,
        socialMediaStrategy,
        makingAuditsAndAnalysis,
        socialMediaConsulting,
        weCanHelpYourTeam,
        communityManagement,
        whenWeSendAMessage,
        paidSocialAndSearch,
        planningAndImplementing,
        optimizationAndAnalysis,
        measuringResults,
        contentCreation,
        createAttractiveContent,
    } = getLocalizedTexts(locale);

    const container = page.getByTestId(skillsBlockSectionDataTestId);

    const testSkillCard = async (title: string, description: string): Promise<void> => {
        const skillItem = isMobile
            ? container.locator('.slide-visible')
            : container.getByTestId(skillsBlockItemWrapperDataTestId);
        const image = skillItem.getByAltText(title);
        const imageBoundingBox = await image.boundingBox();
        const widthDesktop = 160;
        const heightDesktop = 130;

        // renders the image
        await image.scrollIntoViewIfNeeded();
        await expect(image).toBeVisible();
        expect(Math.round(imageBoundingBox?.width || 0)).toEqual(widthDesktop);
        expect(Math.round(imageBoundingBox?.height || 0)).toEqual(heightDesktop);

        // renders the title and the description
        await expect(skillItem.getByText(title, { exact: true })).toBeVisible();
        await expect(skillItem.getByText(description, { exact: true })).toBeVisible();
    };

    // renders page title
    await expect(container.getByText(skills)).toBeVisible();

    // renders 6 skill cards
    await testSkillCard(socialMediaStrategy, makingAuditsAndAnalysis);

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSkillCard(socialMediaConsulting, weCanHelpYourTeam);

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSkillCard(communityManagement, whenWeSendAMessage);

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSkillCard(paidSocialAndSearch, planningAndImplementing);

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSkillCard(optimizationAndAnalysis, measuringResults);

    await clickNextArrowButtonIfMobile(isMobile, container);

    await testSkillCard(contentCreation, createAttractiveContent);
};
