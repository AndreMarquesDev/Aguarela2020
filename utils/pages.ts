export type Page = 'home' | 'about' | 'contact' | 'projects' | 'services';

export const pagesMap: Page[] = [
    'home',
    'about',
    'contact',
    'projects',
    'services',
];

export const pagePathRegex = (page: Page): RegExp => RegExp(`${page}$`);
