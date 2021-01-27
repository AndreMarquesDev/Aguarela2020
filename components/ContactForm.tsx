import React, { FC, useContext, FocusEvent } from 'react';
import { validateEmail, validateName, validateTextarea } from '../utils/formValidation';
import Button from './Button';
import TextsContext from './context/TextsContext';

enum fieldTypes {
    Name = 'name',
    Email = 'email',
    Textarea = 'messsage',
}

const ContactForm: FC = () => {
    const { texts } = useContext(TextsContext);

    const toggleErrorMessage = (element: HTMLElement, behavior: 'add' | 'remove'): void => {
        if (behavior === 'add') {
            element.classList.add('hidden');
        } else if (behavior === 'remove') {
            element.classList.remove('hidden');
        }
    };

    const validateField = (event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>, fieldType: fieldTypes): void => {
        const { target } = event;
        const { value } = target;
        const errorMessageElement = (target.nextElementSibling as HTMLSpanElement);

        if (fieldType === fieldTypes.Name) {
            // eslint-disable-next-line no-unused-expressions
            validateName(value)
                ? toggleErrorMessage(errorMessageElement, 'add')
                : toggleErrorMessage(errorMessageElement, 'remove');
        } else if (fieldType === fieldTypes.Email) {
            // eslint-disable-next-line no-unused-expressions
            validateEmail(value)
                ? toggleErrorMessage(errorMessageElement, 'add')
                : toggleErrorMessage(errorMessageElement, 'remove');
        } else if (fieldType === fieldTypes.Textarea) {
            // eslint-disable-next-line no-unused-expressions
            validateTextarea(value)
                ? toggleErrorMessage(errorMessageElement, 'add')
                : toggleErrorMessage(errorMessageElement, 'remove');
        }
    };

    const handleSubmit = (event): void => {
        event.preventDefault();

        console.log('evento', event);
    };

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <form>
                        <div className="fieldWrapper">
                            <label htmlFor={fieldTypes.Name}>
                                {texts.name}
                                {' '}
                                *
                            </label>
                            <input
                                required
                                aria-describedby="nameErrorMessage"
                                id={fieldTypes.Name}
                                name={fieldTypes.Name}
                                title={fieldTypes.Name}
                                type="text"
                                onBlur={(event): void => validateField(event, fieldTypes.Name)}
                            />
                            <span className="errorMessage hidden" id="nameErrorMessage">{texts.pleaseEnterfirstAndLastName}</span>
                        </div>
                        <div className="fieldWrapper">
                            <label htmlFor="brand">{texts.brandBusiness}</label>
                            <input id="brand" name="brand" title="brand" type="text" />
                        </div>
                        <div className="fieldWrapper">
                            <label htmlFor={fieldTypes.Email}>
                                {texts.email}
                                {' '}
                                *
                            </label>
                            <input
                                required
                                aria-describedby="emailErrorMessage"
                                id={fieldTypes.Email}
                                name={fieldTypes.Email}
                                title={fieldTypes.Email}
                                type="email"
                                onBlur={(event): void => validateField(event, fieldTypes.Email)}
                            />
                            <span className="errorMessage hidden" id="emailErrorMessage">{texts.pleaseEntervalidEmailAddress}</span>
                        </div>
                        <div className="fieldWrapper">
                            <label htmlFor="subject">{texts.subject}</label>
                            <input id="subject" name="subject" title="subject" type="text" />
                        </div>
                        <div className="fieldWrapper textarea">
                            <label htmlFor={fieldTypes.Textarea}>
                                {texts.message}
                                {' '}
                                *
                            </label>
                            <textarea
                                required
                                aria-describedby="messageErrorMessage"
                                id={fieldTypes.Textarea}
                                name={fieldTypes.Textarea}
                                title={fieldTypes.Textarea}
                                onBlur={(event): void => validateField(event, fieldTypes.Textarea)}
                            />
                            <span className="errorMessage hidden" id="messageErrorMessage">{texts.pleaseEnterAMessage}</span>
                        </div>

                        <Button isSubmit onClick={handleSubmit}>{texts.send}</Button>
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
                        opacity: 1;
                        pointer-events: initial;
                        @include fontXS($pink);
                        margin-top: 5rem;

                        &.hidden {
                            opacity: 0;
                            pointer-events: none;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default ContactForm;
