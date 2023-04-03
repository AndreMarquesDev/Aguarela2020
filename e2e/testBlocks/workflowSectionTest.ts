import { Page, expect } from '@playwright/test';
import { Locale } from '../../src/types/Locale';
import { workflowSectionDataTestId } from '../../src/utils/dataTestIds';
import { getLocalizedTexts } from '../utils/utils';

export const workflowSectionTest = async (page: Page, locale: Locale): Promise<void> => {
    const {
        contentCreation,
        workflow,
        defineTarget,
        whatIsTheTarget,
        defineGoals,
        whatAreYourGoals,
        platformStrategy,
        whatPlatforms,
        relevantContentCreation,
        paidSocialAndInfluencers,
        promotePostsAndCollaborate,
        insightsAndReports,
        detailedAnalysis,
        optimization,
        improvementsAndUpdatesToTheStrategy,
    } = getLocalizedTexts(locale);

    const container = page.getByTestId(workflowSectionDataTestId);
    const pageTitle = container.getByText(workflow);

    const testBlock = async (
        number: number,
        title: string,
        backfaceText: string
    ): Promise<void> => {
        const block = container.locator('li').nth(number - 1);
        const backface = container.getByText(backfaceText);

        // renders the block number and the text
        await expect(container.getByText(`${number}.`)).toBeVisible();
        await expect(container.getByText(title, { exact: true })).toBeVisible();

        // hover over block to show backface
        await block.hover();
        await expect(backface).toBeVisible();

        // hover away to hide backface again
        await pageTitle.hover();
        await expect(backface).toBeHidden();
    };

    // renders page title
    await expect(pageTitle).toBeVisible();

    // renders 7 blocks
    await testBlock(1, defineTarget, whatIsTheTarget);
    await testBlock(2, defineGoals, whatAreYourGoals);
    await testBlock(3, platformStrategy, whatPlatforms);
    await testBlock(4, contentCreation, relevantContentCreation);
    await testBlock(5, paidSocialAndInfluencers, promotePostsAndCollaborate);
    await testBlock(6, insightsAndReports, detailedAnalysis);
    await testBlock(7, optimization, improvementsAndUpdatesToTheStrategy);
};
