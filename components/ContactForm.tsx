import axios from 'axios';
import classNames from 'classnames';
import { useFormik } from 'formik';
import React, { FC, useContext, useState } from 'react';
import { FieldTypes, FormState, validateEmail, validateName } from '../utils/formValidation';
import Button from './Button';
import TextsContext from './context/TextsContext';
import FormField from './FormField';

interface FormValues {
    name: string;
    email: string;
    message: string;
    brand: string;
    subject: string;
}

const formSchema = [{
    id: FieldTypes.Name,
    type: 'text',
    isRequired: true,
    isInput: true,
    ariaError: 'nameErrorMessage',
}, {
    id: FieldTypes.Brand,
    type: 'text',
    isRequired: false,
    isInput: true,
    ariaError: null,
}, {
    id: FieldTypes.Email,
    type: 'email',
    isRequired: true,
    isInput: true,
    ariaError: 'emailErrorMessage',
}, {
    id: FieldTypes.Subject,
    type: 'text',
    isRequired: false,
    isInput: true,
    ariaError: null,
}, {
    id: FieldTypes.Textarea,
    type: null,
    isRequired: true,
    isInput: false,
    ariaError: 'messageErrorMessage',
}];

const ContactForm: FC = () => {
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
            errors.name = texts.pleaseEnterfirstAndLastName;
        }

        if (!values.email || !validateEmail(values.email)) {
            errors.email = texts.pleaseEnterfirstAndLastName;
        }

        if (!values.message) {
            errors.message = texts.pleaseEnterfirstAndLastName;
        }

        return errors;
    };

    const onSubmit = (formState: FormValues): void => {
        setFormSubmitState({
            ...formSubmitState,
            sending: true,
        });

        axios
            .post('https://aguarela-contact-form-backend.herokuapp.com/api/sendEmail',
                formState)
            .then(() => {
                setFormSubmitState({
                    sending: false,
                    submitted: true,
                    error: false,
                });
            })
            .catch(() => {
                setFormSubmitState({
                    sending: false,
                    submitted: true,
                    error: true,
                });
            }).finally(() => {
                // eslint-disable-next-line no-use-before-define
                resetForm();
            });
    };

    const formikConfig = {
        initialValues,
        validate,
        onSubmit,
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        handleReset,
        touched,
        values,
        errors,
    } = useFormik(formikConfig);

    const resetForm = (): void => {
        setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            handleReset();
            setFormSubmitState({
                sending: false,
                submitted: false,
                error: false,
            });
        }, 7500);
    };

    return (
        <>
            <section className="container">
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

                        <Button isSubmit disabled={formSubmitState.sending} onClick={handleSubmit}>{texts.send}</Button>
                        {formSubmitState.submitted && (
                            <span
                                className={classNames('formNotification', formSubmitState.error && 'error')}
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html: formSubmitState.error
                                        ? texts.thereWasAnErrorSendingTheMessage
                                        : texts.messageSentSuccessfully,
                                }}
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

export default ContactForm;
