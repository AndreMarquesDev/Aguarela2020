import { Locale } from '../../types/Locale';
import { TextsInterface, textsPt, textsEn } from '../../utils/texts';

export const getLocalizedTexts = (locale: Locale): TextsInterface => {
    if (locale === Locale.Pt) {
        return textsPt;
    }

    return textsEn;
};
