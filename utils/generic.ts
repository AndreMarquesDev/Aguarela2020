export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export const getPrismicText = (content: object): string => content[0].text;

export interface IInstagramPost {
    id: string;
    thumbnail: string;
    caption: string;
    url: string;
}

export const getInstagramPosts = async (numberOfPosts: number): Promise<IInstagramPost> => {
    const instagramUrl = `${process.env.INSTAGRAM_URL}${numberOfPosts}}`;

    const slimUpPosts = (response): IInstagramPost => (
        response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
            id: edge.node.id,
            thumbnail: edge.node.thumbnail_resources[2].src,
            caption: edge.node.edge_media_to_caption.edges[0].node.text,
            url: `https://instagram.com/p/${edge.node.shortcode}`,
        }))
    );

    const data = await fetch(instagramUrl)
        .then(response => response.json());

    return slimUpPosts(data);
};
