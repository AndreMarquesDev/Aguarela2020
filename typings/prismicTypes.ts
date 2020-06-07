export interface IPrismicText {
    type: string;
    text: string;
    spans: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface IPrismicImage {
    alt: string;
    copyright: string;
    dimensions: {
        height: number;
        width: number;
    };
    url: string;
}

export interface IPrismicLink {
    link_type: string; // eslint-disable-line
    target: string;
    url: string;
}
