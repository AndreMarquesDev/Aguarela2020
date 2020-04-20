import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Slide from 'react-reveal/Slide';
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
