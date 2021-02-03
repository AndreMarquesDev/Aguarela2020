import classNames from 'classnames';
import React, { FC, useContext, FocusEvent, ChangeEvent } from 'react';
import { FieldTypes } from '../utils/formValidation';
import TextsContext from './context/TextsContext';

interface FormFieldProps {
    id: FieldTypes;
    type: string;
    value: string;
    isInput: boolean;
    isRequired: boolean;
    hasError: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>) => void;
    ariaError?: string;
}

const FormField: FC<FormFieldProps> = ({
    id,
    type,
    value,
    isInput,
    isRequired,
    hasError,
    onChange,
    onBlur,
    ariaError,
}) => {
    const { texts } = useContext(TextsContext);
    const getLabel = (fieldId: string): string => {
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

    return (
        <>
            <div className={classNames('fieldWrapper', !isInput && 'textarea')}>
                <label htmlFor={id}>
                    {getLabel(id)}
                    {isRequired && ' *'}
                </label>
                {isInput ? (
                    <input
                        aria-describedby={ariaError}
                        data-error={hasError && isRequired}
                        id={id}
                        name={id}
                        required={isRequired}
                        title={id}
                        type={type}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                    />
                ) : (
                    <textarea
                        aria-describedby={ariaError}
                        data-error={hasError && isRequired}
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
                    className={classNames('errorMessage', hasError && 'visible')}
                    id={ariaError}
                >
                    {texts.pleaseEnterfirstAndLastName}

                </span>
            </div>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

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
                        @include fontS($fontWeight: 600);

                        @include mobile {
                            @include fontXS($fontWeight: 600);
                        }
                    }

                    input, textarea {
                        width: 100%;
                        background: $purple;
                        border: none;
                        padding: 5rem;
                        @include fontS($white);

                        @include mobile {
                            @include fontXS($white);
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
                        @include fontXXS($pink);
                        line-height: 13px;
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

export default FormField;
