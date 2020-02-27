import { Page } from './pagesTypes';

export const pagePathRegex = (page: Page): RegExp => RegExp(`^/${page}$`);
