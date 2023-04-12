const contentSecurityPolicyDev = `
    script-src 'self' 'unsafe-eval';
    img-src 'self' data:;
    style-src 'self' fonts.googleapis.com 'unsafe-inline';
    font-src 'self' fonts.gstatic.com;
    object-src 'none';
    base-uri 'none';
`;

const contentSecurityPolicyProd = `
    script-src 'self';
    img-src 'self' data:;
    style-src 'self' fonts.googleapis.com 'unsafe-inline';
    font-src 'self' fonts.gstatic.com;
    object-src 'none';
    base-uri 'none';
`;

const csp =
    process.env.NODE_ENV === 'development' ? contentSecurityPolicyDev : contentSecurityPolicyProd;

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        // https://nextjs.org/docs/advanced-features/security-headers
                        // https://web.dev/strict-csp
                        key: 'Content-Security-Policy',
                        value: csp.replace(/\s{2,}/g, ' ').trim(),
                    },
                ],
            },
        ];
    },
};
