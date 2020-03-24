import React, { FC } from 'react';
import { RichText } from 'prismic-reactjs';
import Title from './Title';
import { getPrismicText } from '../utils/generic';
import { IPrismicLink, IPrismicText } from '../typings/prismicTypes';

interface IFollowUsProps {
    title: IPrismicText;
    link: IPrismicLink;
    linkText: IPrismicText;
}

const FollowUs: FC<IFollowUsProps> = props => {
    const {
        title,
        link,
        linkText,
    } = props;

    return (
        <>
            <section className="wrapper genericMargins">
                <Title text={RichText.asText(title)} />

                <a
                    className="link champagneItalic"
                    href={link.url}
                    rel="noopener noreferrer"
                    target={link.target}
                >
                    {getPrismicText(linkText)}
                </a>
            </section>

            <style jsx>
                {`
                    section {
                        text-align: center;
                    }

                    a {
                        text-transform: uppercase;
                    }
                `}
            </style>
        </>
    );
};

export default FollowUs;
