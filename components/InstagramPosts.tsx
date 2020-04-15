import React, { FC } from 'react';
import Carousel from 'nuka-carousel';
import { IInstagramPost } from '../utils/generic';

interface IInstagramPostsProps {
    posts: IInstagramPost[];
}

const InstagramPosts: FC<IInstagramPostsProps> = props => {
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
                            className="classe"
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img alt={caption} src={thumbnail} />
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
