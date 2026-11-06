import Document, { Html, Head, Main, NextScript } from 'next/document'

const CONTENT_SECURITY_POLICY = [
    "default-src 'self'",
    "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self' https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net",
    "frame-src https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
].join('; ');

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const isNotFound = this.props.__NEXT_DATA__.page === '/404';

        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
                    <meta name="referrer" content="strict-origin-when-cross-origin" />
                    <link rel="preload" href="/fonts/ubuntu-400-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <script src="/a11y/a11y-panel.js" data-accent="#c2410c" data-position="right" defer></script>
                </Head>
                <body>
                    <main>
                        <h1 className="visually-hidden">
                            {isNotFound ? 'Page not found' : 'Ubuntu Desktop Simulator by Dawid Olko'}
                        </h1>
                        <Main />
                    </main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
