import { locales } from '../utils/locales/config';

export type Locale = typeof locales[number];

export interface IPrismicCultures {
    culture: string;
    locale: string;
}
