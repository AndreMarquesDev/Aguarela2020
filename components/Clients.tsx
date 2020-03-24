import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Title from './Title';
import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';
import { IPrismicImage, IPrismicText } from '../typings/prismicTypes';

export interface IClientsThumbnail {
    thumbnail: IPrismicImage;
}

interface IClientsProps {
    title: IPrismicText;
    thumbnails: IClientsThumbnail[];
}

const Clients: FC<IClientsProps> = props => {
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
                        thumbnails.map(({ thumbnail }) => (
                            <li key={thumbnail.alt}>
                                <img
                                    alt={thumbnail.alt}
                                    className="thumbnails"
                                    src={thumbnail.url}
                                />
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
                        grid-template-columns: repeat(7, 1fr);
                        grid-gap: 2%;
                    }

                    li {
                        width: 100%;
                    }

                    img {
                        width: 100%;
                        height: 100rem;
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
                            grid-template-columns: repeat(4, 1fr);
                        }
                    }

                    @media (max-width: ${breakpoints.mobile}) {
                        ul {
                            grid-template-columns: repeat(2, 1fr);
                            grid-gap: 1%;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Clients;
