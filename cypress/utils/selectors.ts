/* eslint-disable id-length */
const baseUrl = 'http://localhost:3000/';
const baseUrlPt = `${baseUrl}pt/`;
const baseUrlEn = `${baseUrl}en/`;

export const urls = {
    pt: {
        homepage: `${baseUrlPt}homepage`,
        about: `${baseUrlPt}about`,
        projects: `${baseUrlPt}projects`,
        services: `${baseUrlPt}services`,
        contact: `${baseUrlPt}contact`,
    },
    en: {
        homepage: `${baseUrlEn}homepage`,
    },
};

export const selectors = {
    generic: {
        languageButton: '.languageButton button',
    },
    links: {
        homepage: 'nav [href="/pt/homepage"]',
        about: 'nav [href="/pt/about"]',
        projects: 'nav [href="/pt/projects"]',
        services: 'nav [href="/pt/services"]',
        contact: 'nav [href="/pt/contact"]',
        seeMoreProjects: '.container a.button[href="/pt/projects"]',
    },
};
