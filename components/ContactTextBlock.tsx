/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Slide from 'react-reveal/Slide';
import Title from './Title';
import { getPrismicText } from '../utils/generic';
import colors from '../styles/colors';
import { Page } from '../utils/pages';
import { PrismicText } from '../typings/prismicTypes';

interface ContactTextBlockProps {
    title: PrismicText;
    bodyText: PrismicText[];
    ctaText: PrismicText;
}

const ContactTextBlock: FC<ContactTextBlockProps> = props => {
    const {
        title,
        bodyText,
        ctaText,
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

                    <Link href={`/${'contact' as Page}`} prefetch={false}>
                        <a className="champagneItalic contactCta">
                            {getPrismicText(ctaText)}
                        </a>
                    </Link>
                </section>
            </Slide>

            <style jsx>
                {`
                    section {
                        text-align: center;
                    }

                    .contactCta {
                        background: ${colors.lightGrey};
                        padding: 20rem;
                        text-transform: uppercase;
                        margin-top: 20rem;
                        display: inline-block;
                    }
                `}
            </style>
        </>
    );
};

export default ContactTextBlock;
