import { getPageFromUrl } from './pages';

describe('pages utils', () => {
    describe('getPageFromUrl function', () => {
        test('properly retrieves the page name from a url', () => {
            const page = 'services';

            Object.defineProperty(window, 'location', {
                value: {
                    pathname: `/en/$${page}`,
                },
                writable: true,
            });

            const pageFromUrl = getPageFromUrl();

            expect(pageFromUrl[0]).toBe(page);
        });
    });
});
