import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { getRemainingLang } from 'multilingual-url/lib';
import { getPageFromUrl } from '../../utils/pages';
import { getCurrentLanguagetexts } from '../../utils/generic';
import { NavLinksContext } from '../context/NavLinksContext';
import { locales } from '../../constants/locales';
import { Locale } from '../../types/Locale';

export const LanguageButton = (): JSX.Element => {
    const router = useRouter();
    const currentPage = getPageFromUrl()[0];
    const languageToSwitchTo = getRemainingLang(locales)[0] as Locale;
    const translatedPageTitle: string = getCurrentLanguagetexts(languageToSwitchTo)[currentPage];

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
                    @import './styles/_vars.scss';

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
