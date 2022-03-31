import React, { useContext } from 'react';
import { letsWorkSectionDataTestId } from '../../utils/dataTestIds';
import { Button } from '../Button/Button';
import { TextsContext } from '../context/TextsContext';
import { Title } from '../Title/Title';

export const LetsWork = (): JSX.Element => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container" data-testid={letsWorkSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title text={texts.letsWork} />

                    <p className="bodyText bodyText--white">{texts.letsWorkDescription}</p>

                    <Button page="contact">{texts.contact}</Button>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $purple;

                        .wrapper {
                            max-width: 1060rem;
                        }
                    }
                `}
            </style>
        </>
    );
};
