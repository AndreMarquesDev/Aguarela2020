import { createContext, Context } from 'react';
import { TextsInterface, textsPt } from '../../utils/texts';

export interface TextsContextProps {
    texts: TextsInterface;
}

export const TextsContext: Context<TextsContextProps> = createContext({
    texts: textsPt,
});
