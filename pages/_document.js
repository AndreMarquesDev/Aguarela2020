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
                    <meta content="My name is Catarina Santiago and I'm a social media manager and content creator based in Lisbon. Aguarela was created with the mission to provide a premium service of social media management and content creation to local businesses and small companies." name="description" />
                    <meta content="social media manager content creator paid social ads digital instagram facebook linkedin google lisbon portugal aguarela" name="keywords" />

                    {/* mobile header color for Chrome, Firefox OS and Opera */}
                    <meta content="#a383ea" name="theme-color" />
                    <meta content="all" name="robots" />
                    {/* google Specific */}
                    {/* tells Google not to provide a translation for this document */}
                    <meta content="notranslate" name="google" />
                    {/* identify the software used to build the document (i.e. - WordPress, Dreamweaver) */}
                    <meta content="React" name="generator" />
                    {/* short description of your document's subject */}
                    <meta content="Catarina Santiago, Social Media Manager" name="subject" />
                    {/* gives a general age rating based on the document's content */}
                    <meta content="General" name="rating" />
                    {/* allows control over how referrer information is passed */}
                    <meta content="no-referrer" name="referrer" />
                    {/* disable automatic detection and formatting of possible phone numbers */}
                    <meta content="telephone=no" name="format-detection" />
                    {/* geo tags */}
                    <meta content="38.722444, -9.139373" name="ICBM" />
                    <meta content="38.722444;-9.139373" name="geo.position" />
                    <meta content="PT" name="geo.region" />
                    <meta content="Lisbon" name="geo.placename" />
                    {/* open Graph data / Facebook Card data */}
                    <meta content="Aguarela Digital Website" property="og:title" />
                    <meta content="website" property="og:type" />
                    <meta content="https://aguareladigital.com" property="og:url" />
                    <meta content="https://aguareladigital.com/images/logo_open_graph.png" property="og:image" />
                    <meta content="315" property="og:image:width" />
                    <meta content="315" property="og:image:height" />
                    <meta content="Aguarela Digital's logo" property="og:image:alt" />
                    <meta
                        content="My name is Catarina Santiago and I'm a social media manager and content creator based in Lisbon. Aguarela was created with the mission to provide a premium service of social media management and content creation to local businesses and small companies."
                        property="og:description"
                    />
                    <meta content="Aguarela Digital Website" property="og:site_name" />
                    <meta content="pt_PT" property="og:locale" />
                    {/* twitter Card data */}
                    <meta content="summary" name="twitter:card" />
                    <meta content="https://aguareladigital.com" name="twitter:url" />
                    <meta content="Aguarela Digital Website" name="twitter:title" />
                    <meta
                        content="My name is Catarina Santiago and I'm a social media manager and content creator based in Lisbon. Aguarela was created with the mission to provide a premium service of social media management and content creation to local businesses and small companies."
                        name="twitter:description"
                    />
                    {/* does not accept svg's */}
                    <meta content="https://aguareladigital.com/images/logo_open_graph.png" name="twitter:image" />
                    <meta content="Aguarela Digital's logo" name="twitter:image:alt" />
                    {/* pinterest lets you prevent people from saving things from your website */}
                    <meta content="nopin" description="Sorry, you can't save from my website!" name="pinterest" />

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
