import type { Locale } from '../../types/Locale';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { contactBlockSectionDataTestId } from '../../utils/dataTestIds';
import { TextsContext } from '../context/TextsContext';
import { TextShadowBlock } from '../TextShadowBlock/TextShadowBlock';

export const ContactBlock = (): JSX.Element => {
    const { texts } = useContext(TextsContext);

    const { query } = useRouter();
    const currentLanguage = query.language?.toString() as Locale;
    const titleMobile
        = currentLanguage === 'en'
            ? `${texts.contactMe1}${texts.contactMe2}t`
            : `${texts.contactMe1}${texts.contactMe2}${texts.contactMe3}`;

    return (
        <TextShadowBlock
            hasButton
            dataTestId={contactBlockSectionDataTestId}
            textBlock1={texts.needHelpWithYourBusiness}
            textBlock2={texts.sendMeAnEmail}
            textBlock3={texts.iAmAvailableToAdvise}
            title1={texts.contactMe1}
            title2={texts.contactMe2}
            title3={texts.contactMe3}
            titleMobile={titleMobile}
        />
    );
};
