import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { welcomeSectionDataTestId } from '../../utils/dataTestIds';
import { Locale } from '../../types/Locale';
import { TextsContext } from '../context/TextsContext';
import { TextShadowBlock } from '../TextShadowBlock/TextShadowBlock';

export const WelcomeBlock = (): JSX.Element => {
    const { texts } = useContext(TextsContext);

    const { query } = useRouter();
    const currentLanguage = query.language?.toString() as Locale;
    const titleMobile =
        currentLanguage === Locale.Pt
            ? `${texts.welcome1}-${texts.welcome2}${texts.welcome3}`
            : `${texts.welcome1}${texts.welcome2}${texts.welcome3}`;

    return (
        <TextShadowBlock
            dataTestId={welcomeSectionDataTestId}
            textBlock1={texts.managingsocialMedia}
            textBlock2={texts.monitorAndOptimizeProcessAndStrategy}
            textBlock3={texts.throughStrategicPlanning}
            title1={texts.welcome1}
            title2={texts.welcome2}
            title3={texts.welcome3}
            titleMobile={titleMobile}
        />
    );
};
