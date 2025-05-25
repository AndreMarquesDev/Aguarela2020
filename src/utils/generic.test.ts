import { Locale } from '../types/Locale';
import { capitalize, getCurrentLanguagetexts } from './generic';
import { textsEn, textsPt } from './texts';

describe('generic utils', () => {
    describe('capitalize function', () => {
        it('properly capitalizes a given string', () => {
            const originalString = 'teste';
            const capitalizedString = capitalize(originalString);

            expect(capitalizedString).toBe('Teste');
        });
    });

    describe('getCurrentLanguagetexts function', () => {
        it('returns the texts object in Portuguese if provided with the "pt" locale', () => {
            const locale = Locale.Pt;
            const texts = getCurrentLanguagetexts(locale);

            expect(texts).toStrictEqual(textsPt);
        });

        it('returns the texts object in English if provided with the "en" locale', () => {
            const locale = Locale.En;
            const texts = getCurrentLanguagetexts(locale);

            expect(texts).toStrictEqual(textsEn);
        });
    });
});
