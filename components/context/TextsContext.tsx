import { createContext, Context } from 'react';
import { TextsInterface, textsPt } from '../../utils/texts';

export interface TextsContextProps {
    texts: TextsInterface;
}

const TextsContext: Context<TextsContextProps> = createContext({
    texts: textsPt,
});

export default TextsContext;
