import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Slide from 'react-reveal/Slide';
import Title from './Title';
import { PrismicText } from '../typings/prismicTypes';

interface WelcomeSectionProps {
    title: PrismicText;
    bodyText: PrismicText[];
}

const WelcomeSection: FC<WelcomeSectionProps> = props => {
    const {
        title,
        bodyText,
    } = props;

    return (
        <>
            <Slide bottom>
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
            </Slide>

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
