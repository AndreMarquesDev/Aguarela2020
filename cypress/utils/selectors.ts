const baseUrl = 'http://localhost:3000/';
const baseUrlPt = `${baseUrl}pt/`;
const baseUrlEn = `${baseUrl}en/`;

export const urls = {
    // eslint-disable-next-line id-length
    pt: {
        homepage: `${baseUrlPt}homepage`,
        about: `${baseUrlPt}about`,
        projects: `${baseUrlPt}projects`,
        services: `${baseUrlPt}services`,
        contact: `${baseUrlPt}contact`,
    },
    // eslint-disable-next-line id-length
    en: {
        homepage: `${baseUrlEn}homepage`,
        about: `${baseUrlEn}about`,
        projects: `${baseUrlEn}projects`,
        services: `${baseUrlEn}services`,
        contact: `${baseUrlEn}contact`,
    },
};
