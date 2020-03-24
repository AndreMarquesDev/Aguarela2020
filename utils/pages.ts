export type Page = 'homepage' | 'about' | 'contact' | 'projects' | 'services';

export const pagesMap: Page[] = [
    'homepage',
    'about',
    'contact',
    'projects',
    'services',
];

export const pagePathRegex = (page: Page): RegExp => RegExp(`${page}$`);
