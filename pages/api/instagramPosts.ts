import 'isomorphic-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export interface IInstagramPost {
    id: string;
    thumbnail: string;
    caption: string;
    url: string;
}

interface IPostsCache {
    lastFetch: number;
    posts: IInstagramPost[];
}

const cache: IPostsCache = {
    lastFetch: 0,
    posts: [],
};

const slimUpPosts = (response): IInstagramPost[] => (
    response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
        id: edge.node.id,
        thumbnail: edge.node.thumbnail_resources[2].src,
        caption: edge.node.edge_media_to_caption.edges[0].node.text,
        url: `https://instagram.com/p/${edge.node.shortcode}`,
    }))
);

const getInstagramPosts = async (numberOfPosts: number): Promise<IInstagramPost[]> => {
    const instagramUrl = `${process.env.INSTAGRAM_URL}${numberOfPosts}}`;
    const timeSinceLastFetch = Date.now() - cache.lastFetch;
    const dayInMilliseconds = 86400000;

    if (timeSinceLastFetch <= dayInMilliseconds) {
        return cache.posts;
    }

    const data = await fetch(instagramUrl).then(response => response.json());
    const posts = slimUpPosts(data);

    cache.lastFetch = Date.now();
    cache.posts = posts;

    return posts;
};

export default async (request: NextApiRequest, response: NextApiResponse<IInstagramPost[]>): Promise<void> => {
    const numberOfPosts = parseInt(request.query.first as string) || 10;
    const posts = await getInstagramPosts(numberOfPosts);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.json(posts);
};
