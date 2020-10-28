import React, { FC } from 'react';
import Carousel from 'nuka-carousel';
import { InstagramPost } from '../pages/api/instagramPosts';

interface InstagramPostsProps {
    posts: InstagramPost[];
}

const InstagramPosts: FC<InstagramPostsProps> = props => {
    const {
        posts,
    } = props;

    return (
        <>
            <div className="carouselContainer">
                <Carousel
                    wrapAround
                    slidesToShow={4}
                >
                    {posts.map(({
                        id, thumbnail, caption, url,
                    }) => (
                        <a
                            key={id}
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                alt={caption}
                                loading="lazy"
                                src={`https://images.weserv.nl/?url=${encodeURIComponent(thumbnail)}`}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>

            <style jsx>
                {`
                    .carouselContainer {
                        height: 300rem;
                        margin-bottom: 30rem;
                    }
                `}
            </style>
        </>
    );
};

export default InstagramPosts;
