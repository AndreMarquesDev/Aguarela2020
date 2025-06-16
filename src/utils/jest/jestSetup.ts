// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';
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

// eslint-disable-next-line import/no-extraneous-dependencies, ts/no-require-imports
jest.mock('next/router', () => require('next-router-mock'));

mockRouter.query = {
    language: 'pt',
};
