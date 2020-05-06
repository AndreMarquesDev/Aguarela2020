import 'isomorphic-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

export interface IInstagramPost {
    id: string;
    thumbnail: string;
    caption: string;
    url: string;
}

const getInstagramPosts = async (numberOfPosts: number): Promise<IInstagramPost> => {
    const instagramUrl = `${process.env.INSTAGRAM_URL}${numberOfPosts}}`;

    const slimUpPosts = (response): IInstagramPost => (
        response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
            id: edge.node.id,
            thumbnail: edge.node.thumbnail_resources[2].src,
            caption: edge.node.edge_media_to_caption.edges[0].node.text,
            url: `https://instagram.com/p/${edge.node.shortcode}`,
        }))
    );

    const data = await fetch(instagramUrl).then(response => response.json());

    return slimUpPosts(data);
};

export default async (request: NextApiRequest, response: NextApiResponse<IInstagramPost>): Promise<void> => {
    const numberOfPosts = parseInt(request.query.first as string) || 10;
    const posts = await getInstagramPosts(numberOfPosts);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.json(posts);
};
