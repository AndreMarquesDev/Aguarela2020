import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { getRemainingLang } from 'multilingual-url/lib';
import { Locale, locales } from '../utils/locales';
import { getPageFromUrl } from '../utils/pages';
import { getCurrentLanguagetexts } from '../utils/generic';

const LanguageButton: FC = () => {
    const router = useRouter();
    const currentPage = getPageFromUrl()[0];
    const languageToSwitchTo = getRemainingLang(locales)[0] as Locale;
    const translatedPageTitle: string = getCurrentLanguagetexts(languageToSwitchTo)[currentPage];

    const onButtonClick = (): void => {
        router.replace(`/${languageToSwitchTo}/${currentPage}`);
        document.title = `${translatedPageTitle} - Aguarela Digital`;
    };

    return (
        <>
            {languageToSwitchTo && (
                <button
                    className="animatedLink"
                    type="button"
                    onClick={(): void => onButtonClick()}
                >
                    {languageToSwitchTo}
                </button>
            )}

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    button {
                        color: inherit;
                        text-transform: inherit;
                        opacity: 0.5;
                        outline: none;

                        &.active::before,
                        &:focus::before,
                        &:active::before {
                            width: 0;
                        }

                        &.white {
                            @include fontXS($white, uppercase);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default LanguageButton;
