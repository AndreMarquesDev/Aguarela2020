import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Title from './Title';
import { IPrismicText } from '../typings/prismicTypes';

interface IWelcomeSectionProps {
    title: IPrismicText;
    bodyText: IPrismicText[];
}

const WelcomeSection: FC<IWelcomeSectionProps> = props => {
    const {
        title,
        bodyText,
    } = props;

    return (
        <>
            <section className="wrapper genericMargins">
                <Title text={RichText.asText(title)} />

                <div>
                    {bodyText.map(({ text }) => (
                        <p key={text} className="bodyText">
                            {text}
                        </p>
                    ))}
                </div>
            </section>

            <style jsx>
                {`
                    section {
                        text-align: center;
                    }
                `}
            </style>
        </>
    );
};

export default WelcomeSection;
