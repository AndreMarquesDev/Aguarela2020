interface IPrismicCultures {
    culture: string;
    locale: string;
}

const prismicCultures: IPrismicCultures[] = [
    {
        culture: 'pt',
        locale: 'pt-pt',
    },
    {
        culture: 'en',
        locale: 'en-gb',
    },
];

export const defaultLanguage = 'pt';

export const getInitialLocale = (): string => {
    if (!navigator) {
        return defaultLanguage;
    }

    const [browserLanguage] = navigator.language.split('-');

    return browserLanguage || defaultLanguage;
};

export const getPrismicLocale = (language: string | string[]): string => {
    const prismicLocale = prismicCultures.find(({ culture }) => culture === language);

    return prismicLocale?.locale || 'en-gb';
};
