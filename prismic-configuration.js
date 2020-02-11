import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;

export const accessToken = process.env.PRISMIC_TOKEN;

const createClientOptions = (request = null, prismicAccessToken = null) => {
    const reqOption = request ? { request } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};

    return {
        ...reqOption,
        ...accessTokenOption,
    };
};

export const Client = (request = null) => (
    Prismic.client(apiEndpoint, createClientOptions(request, accessToken))
);
