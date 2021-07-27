import { desktopBreakpoint } from './utils/useWindowSize';

Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: desktopBreakpoint + 1,
});
