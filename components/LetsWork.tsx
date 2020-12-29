import React, { FC, useContext } from 'react';
import Button from './Button';
import TextsContext from './context/TextsContext';
import Title from './Title';

const LetsWork: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title text={texts.letsWork} />

                    <p>{texts.letsWorkDescription}</p>

                    <Button page="contact">{texts.contact}</Button>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $purple;

                        p {
                            @include fontS($white);
                            text-align: center;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default LetsWork;
