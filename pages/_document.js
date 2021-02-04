import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { defaultLocale } from 'multilingual-url/lib';

class MyDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);

        return {
            ...initialProps,
        };
    }

    render() {
        return (
            <Html lang={defaultLocale}>
                <Head>
                    <meta content="André Marques" name="author" />
                    <meta content="My name is Catarina Santiago and I'm a social media manager and content creator based in Lisbon. Aguarela was created with the mission to provide a premium service of social media management and content creation to local businesses and small companies" name="description" />
                    <meta content="social media manager content creator paid social ads digital instagram facebook linkedin google lisbon portugal aguarela" name="keywords" />
                    <meta content="all" name="robots" />
                    <link as="font" crossOrigin="true" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap" rel="preload" type="font/ttf" />
                    <link
                        href="/images/logo.svg"
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
