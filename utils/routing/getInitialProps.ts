import { locales } from '../locales/config';
import { Locale } from '../locales/localesTypes';

interface IStaticPaths {
    paths: {
        params: {
            language: Locale;
        };
    }[];
    fallback: boolean;
}

export const staticPaths = (): IStaticPaths => {
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
