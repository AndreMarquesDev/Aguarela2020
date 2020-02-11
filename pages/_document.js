import React from 'react';
import Document, {
    Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="/images/logo.png"
                        rel="shortcut icon"
                        type="image/x-icon"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
