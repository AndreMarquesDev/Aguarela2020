import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { getRemainingLang } from '../utils/routing/urlValidation';

interface ILanguageButtonProps {
    language: string;
}

const LanguageButton: FC<ILanguageButtonProps> = props => {
    const {
        language,
    } = props;

    const router = useRouter();

    const onButtonClick = (): void => {
        // TODO: replace the correct url instead of redirecting to the homepage
        router.replace(`/${getRemainingLang}`);
    };

    return (
        <>
            <button
                className="link"
                type="button"
                onClick={() => onButtonClick()} // eslint-disable-line @typescript-eslint/explicit-function-return-type
            >
                Change language from
                {` ${language?.toUpperCase()} to ${getRemainingLang.toString().toUpperCase()}`}
            </button>

            <style jsx>
                {`
                button {
                    position: absolute;
                    right: 20rem;
                    bottom: 20rem;
                }
            `}
            </style>
        </>
    );
};

export default LanguageButton;
