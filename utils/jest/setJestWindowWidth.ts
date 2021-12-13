import { Breakpoint } from '../useWindowSize';

export const setJestWindowWidth = (breakpoint: Breakpoint): void => {
    let width;

    if (breakpoint === Breakpoint.Mobile) {
        width = Breakpoint.Mobile - 1;
    } else if (breakpoint === Breakpoint.Phablet) {
        width = Breakpoint.Phablet - 1;
    } else {
        width = Breakpoint.Desktop + 1;
    }

    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};
