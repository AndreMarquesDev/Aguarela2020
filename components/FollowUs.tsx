import React, { FC, useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Slide from 'react-reveal/Slide';
import Title from './Title';
import { getPrismicText } from '../utils/generic';
import { IPrismicLink, IPrismicText } from '../typings/prismicTypes';
import InstagramPosts from './InstagramPosts';
import { IInstagramPost } from '../pages/api/instagramPosts';

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

    function useInstagram(numberOfPosts: number): IInstagramPost[] {
        const [posts, setPosts] = useState([]);

        useEffect(() => {
            fetch(`/api/instagramPosts?first=${numberOfPosts}`)
                .then(response => response.json())
                .then(data => {
                    setPosts(data);
                });
        }, [numberOfPosts]);

        return posts;
    }

    const instagramPosts = useInstagram(10);

    return (
        <>
            <Slide bottom>
                <section className="wrapper genericMargins">
                    <Title text={RichText.asText(title)} />

                    <InstagramPosts posts={instagramPosts} />

                    <a
                        className="link champagneItalic"
                        href={link.url}
                        rel="noopener noreferrer"
                        target={link.target}
                    >
                        {getPrismicText(linkText)}
                    </a>
                </section>
            </Slide>

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
