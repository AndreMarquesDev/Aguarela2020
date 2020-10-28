import { Locale, locales } from './locales';

interface StaticPaths {
    paths: {
        params: {
            language: Locale;
        };
    }[];
    fallback: boolean;
}

export const staticPaths = (): StaticPaths => {
    const paths = locales.map(locale => ({
        params: {
            language: locale,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};
