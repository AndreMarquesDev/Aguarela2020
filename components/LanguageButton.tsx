import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { getRemainingLang } from 'multilingual-url/lib';
import { Locale, locales } from '../utils/locales';
import { getPageFromUrl } from '../utils/pages';
import { getCurrentLanguagetexts } from '../utils/generic';
import NavLinksContext from './context/NavLinksContext';

const LanguageButton: FC = () => {
    const router = useRouter();
    const currentPage = getPageFromUrl()[0];
    const languageToSwitchTo = getRemainingLang(locales)[0] as Locale;
    const translatedPageTitle: string = getCurrentLanguagetexts(languageToSwitchTo)[currentPage];

    const { isMenuOpen, toggleMenu } = useContext(NavLinksContext);

    const onButtonClick = (): void => {
        router.replace(`/${languageToSwitchTo}/${currentPage}`);
        document.title = `${translatedPageTitle} - Aguarela Digital`;
        // eslint-disable-next-line no-unused-expressions
        isMenuOpen && toggleMenu(!isMenuOpen);
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

export default LanguageButton;
