import axios from 'axios';
import classNames from 'classnames';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { FormPostRequestBody } from '../../types/FormPostRequestBody';
import { FormValues } from '../../types/FormValues';
import { contactFormContainerDataTestId } from '../../utils/dataTestIds';
import { FieldTypes, FormState, validateName, validateEmail } from '../../utils/formValidation';
import { contactFormBackendUrl } from '../../utils/urls';
import { Button } from '../Button/Button';
import { TextsContext } from '../context/TextsContext';
import { FormField } from '../FormField/FormField';

const formSchema = [
    {
        id: FieldTypes.Name,
        type: 'text',
        isRequired: true,
        isInput: true,
        ariaError: 'nameErrorMessage',
    },
    {
        id: FieldTypes.Brand,
        type: 'text',
        isRequired: false,
        isInput: true,
        ariaError: undefined,
    },
    {
        id: FieldTypes.Email,
        type: 'email',
        isRequired: true,
        isInput: true,
        ariaError: 'emailErrorMessage',
    },
    {
        id: FieldTypes.Subject,
        type: 'text',
        isRequired: false,
        isInput: true,
        ariaError: undefined,
    },
    {
        id: FieldTypes.Textarea,
        type: '',
        isRequired: true,
        isInput: false,
        ariaError: 'messageErrorMessage',
    },
];

export const FORM_RESET_TIMEOUT = 5000;

export const ContactForm = (): JSX.Element => {
    const { texts } = useContext(TextsContext);

    const [formSubmitState, setFormSubmitState] = useState({
        sending: false,
        submitted: false,
        error: false,
    });

    const initialValues: FormValues = {
        name: '',
        email: '',
        message: '',
        brand: '',
        subject: '',
    };

    const validate = (values: FormState): FormState => {
        const errors = {} as FormState;

        if (!values.name || !validateName(values.name)) {
            errors.name = texts.pleaseEnterFirstAndLastName;
        }

        if (!values.email || !validateEmail(values.email)) {
            errors.email = texts.pleaseEnterValidEmailAddress;
        }

        if (!values.message) {
            errors.message = texts.pleaseEnterAMessage;
        }

        return errors;
    };

    const onSubmit = (formState: FormValues): void => {
        setFormSubmitState({
            ...formSubmitState,
            sending: true,
        });

        const formStateWithHiddenInputs: FormPostRequestBody = {
            ...formState,
            isPlaywright: process.env.NEXT_PUBLIC_IS_PLAYWRIGHT === 'true',
        };

        axios
            .post(contactFormBackendUrl, formStateWithHiddenInputs)
            .then(() => {
                setFormSubmitState({
                    sending: true,
                    submitted: true,
                    error: false,
                });
            })
            .catch(() => {
                setFormSubmitState({
                    sending: true,
                    submitted: true,
                    error: true,
                });
            })
            .finally(() => {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                resetForm();
            });
    };

    const formikConfig = {
        initialValues,
        validate,
        onSubmit,
    };

    const { handleSubmit, handleChange, handleBlur, handleReset, touched, values, errors } =
        useFormik(formikConfig);

    const resetForm = (): void => {
        setTimeout(() => {
            // @ts-ignore
            handleReset();
            setFormSubmitState({
                sending: false,
                submitted: false,
                error: false,
            });
        }, FORM_RESET_TIMEOUT);
    };

    return (
        <>
            <section className="container" data-testid={contactFormContainerDataTestId}>
                <div className="wrapper genericMargins">
                    <form noValidate aria-describedby="contactForm" onSubmit={handleSubmit}>
                        {formSchema.map(({ id, type, isRequired, isInput, ariaError }) => (
                            <FormField
                                key={id}
                                ariaError={ariaError}
                                hasError={!!touched[id] && !!errors[id]}
                                id={id}
                                isInput={isInput}
                                isRequired={isRequired}
                                type={type}
                                value={values[id]}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        ))}

                        <Button isSubmit disabled={formSubmitState.sending} onClick={handleSubmit}>
                            {texts.send}
                        </Button>
                        {formSubmitState.submitted && (
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: formSubmitState.error
                                        ? texts.thereWasAnErrorSendingTheMessage
                                        : texts.messageSentSuccessfully,
                                }}
                                className={classNames(
                                    'formNotification',
                                    formSubmitState.error && 'error'
                                )}
                                id="contactForm"
                            />
                        )}
                    </form>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $white;
                    }

                    .wrapper {
                        display: flex;
                        justify-content: center;
                    }

                    form {
                        max-width: 1060rem;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }

                    .formNotification {
                        display: block;
                        @include fontS($green, none, 500);
                        margin-top: 30rem;

                        &.error {
                            @include fontS($pink, none, 500);
                        }

                        @include mobile {
                            @include fontXS($green, none, 500);
                            margin-top: 30rem;

                            &.error {
                                @include fontXS($pink, none, 500);
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};
