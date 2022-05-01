import React, { ReactNode } from 'react';
import { TextsContext } from '../../components/context/TextsContext';
import { textsEn, textsPt } from '../texts';

interface MockTextsContextProps {
    isEnglish: boolean;
    children: ReactNode;
}

export const MockTextsContext = ({ isEnglish, children }: MockTextsContextProps): JSX.Element => {
    return (
        <TextsContext.Provider
            value={{
                texts: isEnglish ? textsEn : textsPt,
            }}
        >
            {children}
        </TextsContext.Provider>
    );
};
