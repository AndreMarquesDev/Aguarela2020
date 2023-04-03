import { Breakpoint } from '../useWindowSize';
import { setJestWindowWidth } from './setJestWindowWidth';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
    })),
});

setJestWindowWidth(Breakpoint.Desktop);
