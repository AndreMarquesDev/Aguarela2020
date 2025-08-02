import type { Locale } from '../../types/Locale';
import type { TextsInterface } from '../../utils/texts';
import { getRemainingLang } from 'multilingual-url/lib';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { locales } from '../../constants/locales';
import { getCurrentLanguagetexts } from '../../utils/generic';
import { getPageFromUrl } from '../../utils/pages';
import { NavLinksContext } from '../context/NavLinksContext';

export const LanguageButton = (): JSX.Element => {
    const router = useRouter();
    const currentPage = getPageFromUrl()[0];
    const languageToSwitchTo = getRemainingLang(locales)[0] as Locale;
    const translatedPageTitle: string =
        getCurrentLanguagetexts(languageToSwitchTo)[currentPage as keyof TextsInterface];

    const { isMenuOpen, toggleMenu } = useContext(NavLinksContext);

    const onButtonClick = (): void => {
        router.replace(`/${languageToSwitchTo}/${currentPage}`);
        document.title = `${translatedPageTitle} - Aguarela Digital`;

        if (isMenuOpen) {
            toggleMenu(!isMenuOpen);
        }
    };

    return (
        <>
            <button suppressHydrationWarning type="button" onClick={onButtonClick}>
                {languageToSwitchTo}
            </button>

            <style jsx>
                {`
                    button {
                        color: inherit;
                        text-transform: inherit;
                        opacity: 0.5;
                        outline: none;
                        transition: color 0.15s linear;
                    }
                `}
            </style>
        </>
    );
};
