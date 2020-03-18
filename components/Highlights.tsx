/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Title from './Title';
import colors from '../styles/colors';
import { getPrismicText } from '../utils/generic';
import breakpoints from '../styles/breakpoints';

interface IHighlightsProps {
    title: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    thumbnails: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Highlights: FC<IHighlightsProps> = props => {
    const {
        title,
        thumbnails,
    } = props;

    return (
        <>
            <section className="wrapper genericMargins">
                <Title text={RichText.asText(title)} />

                <ul>
                    {
                        thumbnails.map(({ thumbnail, thumbnail_caption, see_more }) => (
                            <li key={thumbnail.alt}>
                                <img
                                    alt={thumbnail.alt}
                                    className="thumbnails"
                                    src={thumbnail.url}
                                />
                                <p>{getPrismicText(thumbnail_caption)}</p>
                                <Link href="#" prefetch={false}>
                                    <a className="link champagneItalic">
                                        {getPrismicText(see_more)}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <style jsx>
                {`
                    section {
                        text-align: center;
                    }

                    ul {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-gap: 4%;
                    }

                    li {
                        width: 100%;
                    }

                    img {
                        width: 100%;
                        height: 500rem;
                        margin-bottom: 15rem;
                        transition: transform .2s ease;

                        &:hover {
                            transform: scale(.9);
                        }
                    }

                    p {
                        text-transform: uppercase;
                        color: ${colors.aqua};
                        margin-bottom: 10rem;
                    }

                    a {
                        text-transform: uppercase;
                    }

                    @media (max-width: ${breakpoints.phablet}) {
                        ul {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        img {
                            height: 400rem;
                        }
                    }

                    @media (max-width: ${breakpoints.mobile}) {
                        ul {
                            grid-template-columns: 1fr;
                            grid-gap: 1%;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Highlights;
