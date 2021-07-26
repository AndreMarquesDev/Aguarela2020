jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
        };
    },
}));

module.exports = jest.requireMock('next/router');
