import { useFormik } from 'formik';
import React, { FC, useContext } from 'react';
import { FieldTypes, FormState, validateEmail, validateName } from '../utils/formValidation';
import Button from './Button';
import TextsContext from './context/TextsContext';
import FormField from './FormField';

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

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values,
        errors,
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            brand: '',
            subject: '',
        },
        validate,
        onSubmit: formState => {
            console.log(JSON.stringify(formState));
        },
    });

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <form noValidate onSubmit={handleSubmit}>
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
                `}
            </style>
        </>
    );
};

export default ContactForm;
