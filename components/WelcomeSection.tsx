import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Title from './Title';

interface IWelcomeSectionProps {
    title: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    bodyContent: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const WelcomeSection: FC<IWelcomeSectionProps> = props => {
    const {
        title,
        bodyContent,
    } = props;

    return (
        <>
            <section className="wrapper genericMargins">
                <Title text={RichText.asText(title)} />

                <div>
                    {bodyContent.map(({ text }) => (
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
