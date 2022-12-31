import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html className='dark scroll-smooth'>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins:wght@400;500;600;700&display=swap'
                        rel='stylesheet'
                    />
             
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta name='theme-color' content='#ffffff' />
                </Head>
                <body className='min-h-screen bg-gray-100 font-sans tracking-tight antialiased dark:bg-primary'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
