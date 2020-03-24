/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Title from './Title';
import { getPrismicText } from '../utils/generic';
import colors from '../styles/colors';
import { Page } from '../utils/pages';
import { IPrismicText } from '../typings/prismicTypes';

interface IContactTextBlockProps {
    title: IPrismicText;
    bodyText: IPrismicText[];
    ctaText: IPrismicText;
}

const ContactTextBlock: FC<IContactTextBlockProps> = props => {
    const {
        title,
        bodyText,
        ctaText,
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

                <Link href={`/${'contact' as Page}`} prefetch={false}>
                    <a className="champagneItalic contactCta">
                        {getPrismicText(ctaText)}
                    </a>
                </Link>
            </section>

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
