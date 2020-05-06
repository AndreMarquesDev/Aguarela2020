/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Slide from 'react-reveal/Slide';
import Title from './Title';
import colors from '../styles/colors';
import { getPrismicText } from '../utils/generic';
import breakpoints from '../styles/breakpoints';
import { IPrismicImage, IPrismicText } from '../typings/prismicTypes';

export interface IHighlightsThumbnail {
    thumbnail: IPrismicImage;
    thumbnailCaption: IPrismicText;
    seeMore: IPrismicText;
}

interface IHighlightsProps {
    title: IPrismicText;
    thumbnails: IHighlightsThumbnail[];
}

const Highlights: FC<IHighlightsProps> = props => {
    const {
        title,
        thumbnails,
    } = props;

    return (
        <>
            <Slide bottom>
                <section className="wrapper genericMargins">
                    <Title text={RichText.asText(title)} />

                    <ul>
                        {
                            thumbnails.map(({ thumbnail, thumbnailCaption, seeMore }) => (
                                <li key={thumbnail.alt}>
                                    <img
                                        alt={thumbnail.alt}
                                        className="thumbnails"
                                        loading="lazy"
                                        src={thumbnail.url}
                                    />
                                    <p>{getPrismicText(thumbnailCaption)}</p>
                                    <Link href="#" prefetch={false}>
                                        <a className="link champagneItalic">
                                            {getPrismicText(seeMore)}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </Slide>

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
