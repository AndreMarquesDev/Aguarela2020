export enum Viewport {
    desktop = 'desktop',
    mobile = 'mobile',
}

const scrollbarWidth = 17;
const navHeight = 160;

// eslint-disable-next-line capitalized-comments
// TODO rename to desktopViewportWidth
export const defaultViewportWidth = 1920;
export const defaultViewportHeight = 1080;
export const mobileViewportWidth = 390;
export const mobileViewportHeight = 800;

export const bannerWidth = defaultViewportWidth - scrollbarWidth;
export const bannerHeight = defaultViewportHeight * 0.9 - navHeight;

export const brandLogosWidth = 150;
export const brandLogosHeight = 150;
export const brandLogosWidthMobile = 102;
export const brandLogosHeightMobile = 102;

export const skillsBlockImagesWidth = 160;
export const skillsBlockImagesHeight = 130;

export const projectsListNoCarouselImagesWidth = 400;
export const projectsListNoCarouselImagesHeight = 400;
export const projectsListDoubleCarouselImagesWidth = 357;
export const projectsListDoubleCarouselImagesHeight = 357;
