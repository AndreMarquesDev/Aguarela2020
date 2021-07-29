jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: {
                language: 'pt',
            },
            asPath: '',
        };
    },
}));

module.exports = jest.requireMock('next/router');
