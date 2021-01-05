import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import { Locale } from '../utils/locales';
import TextsContext from './context/TextsContext';
import TextShadowBlock from './TextShadowBlock';

const WelcomeBlock: FC = () => {
    const { texts } = useContext(TextsContext);

    const {
        query,
    } = useRouter();
    const currentLanguage = query.language?.toString() as Locale;
    const titleMobile = currentLanguage === 'pt' ? `${texts.welcome1}-${texts.welcome2}${texts.welcome3}` : `${texts.welcome1}${texts.welcome2}${texts.welcome3}`;

    return (
        <TextShadowBlock
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

export default WelcomeBlock;
