import React, { FC, useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Slide from 'react-reveal/Slide';
import Title from './Title';
import { getPrismicText } from '../utils/generic';
import { PrismicLink, PrismicText } from '../typings/prismicTypes';
import InstagramPosts from './InstagramPosts';
import { InstagramPost } from '../pages/api/instagramPosts';

interface FollowUsProps {
    title: PrismicText;
    link: PrismicLink;
    linkText: PrismicText;
}

const FollowUs: FC<FollowUsProps> = props => {
    const {
        title,
        link,
        linkText,
    } = props;

    function useInstagram(numberOfPosts: number): InstagramPost[] {
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
