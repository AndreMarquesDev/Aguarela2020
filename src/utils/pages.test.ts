import * as multilingualUrl from 'multilingual-url/lib';
import { getPageFromUrl } from './pages';

describe('pages', () => {
    describe('getPageFromUrl', () => {
        it('returns an empty array if is not client side', () => {
            Object.defineProperty(multilingualUrl, 'isClientSide', { value: false });

            const pageFromUrl = getPageFromUrl();

            expect(pageFromUrl.length).toBeFalsy();
        });

        it('properly retrieves the page name from a url', () => {
            Object.defineProperty(multilingualUrl, 'isClientSide', { value: true });

            const page = 'services';

            Object.defineProperty(window, 'location', {
                value: {
                    pathname: `/en/$${page}`,
                },
                writable: true,
            });

            const pageFromUrl = getPageFromUrl();

            expect(pageFromUrl[0]).toBe(page);
            expect(pageFromUrl.length).toBeTruthy();
        });
    });
});
