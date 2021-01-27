import React, { FC, useContext } from 'react';
import Button from './Button';
import TextsContext from './context/TextsContext';

const ContactForm: FC = () => {
    const { texts } = useContext(TextsContext);

    const handleSubmit = (event): void => {
        event.preventDefault();
    };

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <form>
                        <div className="fieldWrapper">
                            <label htmlFor="name">{texts.name}</label>
                            <input id="name" name="name" type="text" />
                        </div>
                        <div className="fieldWrapper">
                            <label htmlFor="brand">{texts.brandBusiness}</label>
                            <input id="brand" name="brand" type="text" />
                        </div>
                        <div className="fieldWrapper">
                            <label htmlFor="email">{texts.email}</label>
                            <input id="email" name="email" type="email" />
                        </div>
                        <div className="fieldWrapper">
                            <label htmlFor="subject">{texts.subject}</label>
                            <input id="subject" name="subject" type="text" />
                        </div>
                        <div className="fieldWrapper textarea">
                            <label htmlFor="message">{texts.message}</label>
                            <textarea id="message" name="message" />
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
                        margin-bottom: 30rem;

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

                    input {
                        width: 100%;
                        height: 30rem;
                        background: $purple;
                        border: none;
                        padding: 5rem;
                    }

                    textarea {
                        width: 100%;
                        height: 120rem;
                        background: $purple;
                        border: none;
                        padding: 5rem;
                    }
                `}
            </style>
        </>
    );
};

export default ContactForm;
