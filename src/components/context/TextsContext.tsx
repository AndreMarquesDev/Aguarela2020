import type { Context } from 'react';
import type { TextsInterface } from '../../utils/texts';
import { createContext } from 'react';
import { textsPt } from '../../utils/texts';

export type TextsContextProps = {
    texts: TextsInterface;
};

export const TextsContext: Context<TextsContextProps> = createContext({
    texts: textsPt,
});
