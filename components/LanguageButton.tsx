import React, { FC } from 'react';
import { useRouter } from 'next/router';
import ReactCountryFlag from 'react-country-flag';
import { getRemainingLang } from 'multilingual-url/lib';
import { locales } from '../utils/locales';
import { getPageFromUrl } from '../utils/pages';

interface LanguageButtonProps {
    language: string;
}

const LanguageButton: FC<LanguageButtonProps> = props => {
    const {
        language,
    } = props;

    const router = useRouter();
    const currentPage = getPageFromUrl[0];
    const languageToSwitchTo = getRemainingLang(locales)[0];
    const countryCode = language === 'en' ? 'PT' : 'GB';

    const onButtonClick = (): void => {
        router.replace(`/${languageToSwitchTo}/${currentPage}`);
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
                        position: fixed;
                        right: 20rem;
                        bottom: 20rem;
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
