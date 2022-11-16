import { Locale } from '../../types/Locale';
import {
    menuIconButtonDataTestId,
    nukaCarouselNextButtonDataTestId,
} from '../../utils/dataTestIds';
import { TextsInterface, textsPt, textsEn } from '../../utils/texts';

export const getLocalizedTexts = (locale: Locale): TextsInterface => {
    if (locale === Locale.Pt) {
        return textsPt;
    }

    return textsEn;
};

export const openMenuMobile = (isMobile: boolean, isFirefox: boolean): void => {
    if (isMobile) {
        cy.getByDataTestId(menuIconButtonDataTestId).click({ force: isFirefox });
    }
};

export const clickNextArrowButtonIfMobile = (
    isMobile: boolean,
    container: string,
    containerTitle: string
): void => {
    const isFirefox = Cypress.isBrowser('firefox');

    if (isMobile) {
        cy.getByDataTestIdParent(container, nukaCarouselNextButtonDataTestId).click({
            force: isFirefox,
        });

        cy.getByText(container, containerTitle).scrollIntoView();
    }
};
