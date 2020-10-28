import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/d.ts/documents';
import { getPrismicLocale } from 'multilingual-url/lib';
import { prismicCultures, Locale, locales } from './locales';
import { Client } from '../prismic-configuration';

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

export const getNavLinks = async (locale: string | string[]): Promise<Document> => {
    const prismicLocale = getPrismicLocale(locale, prismicCultures);

    const navLinksResponse = await Client.query(Prismic.Predicates.at('document.type', 'nav_links'),
        {
            lang: prismicLocale,
        });

    return navLinksResponse.results[0];
};

export const getPrismicDoc = async (locale: string | string[], prismicDocId: string): Promise<Document> => {
    const prismicLocale = getPrismicLocale(locale, prismicCultures);

    const response = await Client.query(Prismic.Predicates.at('document.type', prismicDocId),
        {
            lang: prismicLocale,
        });

    return response.results[0];
};
