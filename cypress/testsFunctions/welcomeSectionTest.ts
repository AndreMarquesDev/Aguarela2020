import { welcomeSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../utils/locales';
import { getLocalizedTexts } from '../utils/getTexts';
import { Viewport } from '../utils/variables';
import { matchSnapshot } from './matchSnapshot';

export const welcomeSectionTest = (locale: Locale, viewport: Viewport): void => {
    const {
        welcome1,
        welcome2,
        welcome3,
        managingsocialMedia,
        monitorAndOptimizeProcessAndStrategy,
        throughStrategicPlanning,
    } = getLocalizedTexts(locale);

    cy.contains(welcome1).scrollIntoView();

    cy.getByText(welcomeSectionDataTestId, welcome1);
    cy.getByText(welcomeSectionDataTestId, welcome2);
    cy.getByText(welcomeSectionDataTestId, welcome3);

    cy.getByText(welcomeSectionDataTestId, managingsocialMedia);
    cy.getByText(welcomeSectionDataTestId, monitorAndOptimizeProcessAndStrategy);
    cy.getByText(welcomeSectionDataTestId, throughStrategicPlanning);

    cy.contains(welcome1).scrollIntoView();

    matchSnapshot('welcome', locale, viewport);
};
