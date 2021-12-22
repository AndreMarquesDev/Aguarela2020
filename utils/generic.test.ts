import { textsPt, textsEn } from './texts';
import { capitalize, getCurrentLanguagetexts } from './generic';

describe('generic utils', () => {
    describe('capitalize function', () => {
        test('properly capitalizes a given string', () => {
            const originalString = 'teste';
            const capitalizedString = capitalize(originalString);

            expect(capitalizedString).toBe('Teste');
        });
    });

    describe('getCurrentLanguagetexts function', () => {
        test('returns the texts object in Portuguese if provided with the "pt" locale', () => {
            const locale = 'pt';
            const texts = getCurrentLanguagetexts(locale);

            expect(texts).toStrictEqual(textsPt);
        });

        test('returns the texts object in English if provided with the "en" locale', () => {
            const locale = 'en';
            const texts = getCurrentLanguagetexts(locale);

            expect(texts).toStrictEqual(textsEn);
        });
    });
});
