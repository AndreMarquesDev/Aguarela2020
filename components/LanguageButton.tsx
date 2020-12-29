import React, { FC } from 'react';
import { useRouter } from 'next/router';
import ReactCountryFlag from 'react-country-flag';
import { getRemainingLang } from 'multilingual-url/lib';
import { Locale, locales } from '../utils/locales';
import { getPageFromUrl } from '../utils/pages';
import { getCurrentLanguagetexts } from '../utils/generic';

interface LanguageButtonProps {
    language: Locale;
}

const LanguageButton: FC<LanguageButtonProps> = props => {
    const {
        language,
    } = props;

    const router = useRouter();
    const currentPage = getPageFromUrl()[0];
    const languageToSwitchTo = getRemainingLang(locales)[0] as Locale;
    const countryCode = language === 'en' ? 'PT' : 'GB';
    const translatedPageTitle: string = getCurrentLanguagetexts(languageToSwitchTo)[currentPage];

    const onButtonClick = (): void => {
        router.replace(`/${languageToSwitchTo}/${currentPage}`);
        document.title = `${translatedPageTitle} - Aguarela Digital`;
    };

    return (
        <>
            <button
                type="button"
                onClick={(): void => onButtonClick()}
            >
                <ReactCountryFlag
                    svg
                    countryCode={countryCode}
                    style={{
                        width: '30rem',
                        height: '30rem',
                    }}
                    title={countryCode}
                />
            </button>

            <style jsx>
                {`
                    button {
                        transition: transform .2s;

                        &:hover {
                            transform: scale(.95);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default LanguageButton;
