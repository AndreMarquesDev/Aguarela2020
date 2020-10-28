import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;

export const accessToken = process.env.PRISMIC_TOKEN;

export const Client = Prismic.client(apiEndpoint, {
    accessToken,
});
