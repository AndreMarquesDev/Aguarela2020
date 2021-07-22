import { isClientSide } from 'multilingual-url/lib';

export type Page = 'homepage' | 'about' | 'contact' | 'projects' | 'services';

export const pagesMap: Page[] = ['homepage', 'about', 'projects', 'services', 'contact'];

export const pagePathRegex = (page: Page): RegExp => RegExp(`${page}$`);

// export const getPageFromUrl = isClientSide ? pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname)) : [];
export const getPageFromUrl = (): Page[] => {
    if (!isClientSide) {
        return [];
    }

    return pagesMap.filter(page => pagePathRegex(page).test(window.location.pathname));
};
