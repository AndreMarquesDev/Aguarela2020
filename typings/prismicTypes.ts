export interface PrismicText {
    type: string;
    text: string;
    spans: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface PrismicImage {
    alt: string;
    copyright: string;
    dimensions: {
        height: number;
        width: number;
    };
    url: string;
}

export interface PrismicLink {
    link_type: string; // eslint-disable-line camelcase
    target: string;
    url: string;
}
