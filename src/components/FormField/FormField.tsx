import type { ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { mobileMediaQuery } from '../../styles/mediaQueries';
import {
    contactFormErrorMessageHiddenDataTestId,
    contactFormErrorMessageVisibleDataTestId,
} from '../../utils/dataTestIds';
import { FieldTypes } from '../../utils/formValidation';
import { TextsContext } from '../context/TextsContext';

export type FormFieldProps = {
    id: FieldTypes;
    type: string;
    value: string;
    isInput: boolean;
    isRequired: boolean;
    hasError: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>) => void;
    ariaError?: string;
};

export const FormField = ({
    id,
    type,
    value,
    isInput,
    isRequired,
    hasError,
    onChange,
    onBlur,
    ariaError,
}: FormFieldProps): JSX.Element => {
    const { texts } = useContext(TextsContext);

    const getLabel = (fieldId: string): string | null => {
        switch (fieldId) {
            case FieldTypes.Name:
                return texts.name;
            case FieldTypes.Brand:
                return texts.brandBusiness;
            case FieldTypes.Email:
                return texts.email;
            case FieldTypes.Subject:
                return texts.subject;
            case FieldTypes.Textarea:
                return texts.message;
            default:
                return null;
        }
    };

    const getErrorMessage = (fieldId: string): string | null => {
        switch (fieldId) {
            case FieldTypes.Name:
                return texts.pleaseEnterFirstAndLastName;
            case FieldTypes.Email:
                return texts.pleaseEnterValidEmailAddress;
            case FieldTypes.Textarea:
                return texts.pleaseEnterAMessage;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={classNames('fieldWrapper', !isInput && 'textarea')}>
                <label className="fontS" htmlFor={id}>
                    {getLabel(id)}
                    {isRequired && ' *'}
                </label>
                {isInput
                    ? (
                            <input
                                aria-describedby={ariaError}
                                className="fontS"
                                data-error={hasError && isRequired}
                                data-testid={id}
                                id={id}
                                name={id}
                                required={isRequired}
                                title={id}
                                type={type}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                        )
                    : (
                            <textarea
                                aria-describedby={ariaError}
                                className="fontS"
                                data-error={hasError && isRequired}
                                data-testid={id}
                                id={id}
                                name={id}
                                required={isRequired}
                                title={id}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                        )}
                <span
                    className={classNames('errorMessage', 'fontXXS', hasError && 'visible')}
                    data-testid={
                        hasError
                            ? contactFormErrorMessageVisibleDataTestId
                            : contactFormErrorMessageHiddenDataTestId
                    }
                    id={ariaError}
                >
                    {getErrorMessage(id)}
                </span>
            </div>

            <style jsx>
                {`
                    .fieldWrapper {
                        width: 47%;
                        margin-bottom: 10rem;

                        &.textarea {
                            width: 100%;
                            margin-bottom: 0;
                        }
                    }

                    label {
                        display: block;
                        margin-bottom: 5rem;
                        font-weight: 600;

                        @media (${mobileMediaQuery}) {
                            font-size: var(--fontSizeXS);
                        }
                    }

                    input,
                    textarea {
                        width: 100%;
                        background: var(--purple);
                        border: none;
                        padding: 5rem;
                        color: var(--white);

                        @media (${mobileMediaQuery}) {
                            font-size: var(--fontSizeXS);
                        }
                    }

                    input {
                        height: 30rem;
                    }

                    textarea {
                        height: 120rem;
                    }

                    .errorMessage {
                        display: inline-block;
                        color: var(--pink);
                        line-height: 13rem;
                        margin-top: 5rem;
                        opacity: 0;
                        pointer-events: none;

                        &.visible {
                            opacity: 1;
                            pointer-events: initial;
                        }
                    }
                `}
            </style>
        </>
    );
};
