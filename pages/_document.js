import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=1"/>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicons/favicon-32x32.png?v=1"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicons/favicon-16x16.png?v=1"
                    />
                    <link
                        rel="manifest"
                        href="/favicons/site.webmanifest?v=1"
                    />
                    <link
                        rel="mask-icon"
                        href="/favicons/safari-pinned-tab.svg?v=1"
                        color="#000000"
                    />
                    <link rel="shortcut icon" href="/favicon.ico?v=1" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="theme-color" content="#20212E" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <link rel="stylesheet" href="https://parsinta.com/css/parsinta-exclusive.css" /> */}
                </Head>
                <body className="antialiased font-sans bg-[#20212E] tracking-tight">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
