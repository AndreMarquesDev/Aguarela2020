import { desktopBreakpoint, mobileBreakpoint } from '../useWindowSize';

export const setJestWindowWidth = (isMobile = false): void => {
    const width = isMobile ? mobileBreakpoint - 1 : desktopBreakpoint + 1;

    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};
