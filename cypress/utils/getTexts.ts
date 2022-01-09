import { TextsInterface, textsPt, textsEn } from '../../utils/texts';
import { Locale } from '../../utils/locales';

export const getLocalizedTexts = (locale: Locale): TextsInterface => {
    if (locale === 'pt') {
        return textsPt;
    }

    return textsEn;
};
