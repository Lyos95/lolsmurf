import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../images/fabi.png")}></link>
                    <script data-ad-client="ca-pub-2990372150294900" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />                   
                    <script
                        src="https://www.paypal.com/sdk/js?client-id=ActeDxf8liyWa8og-xYgIJs5G_JiB70Zk_w1_Xf-M-UosC8j7Eq8V4_Imd5us934RPmWJf6LXPtty3xE&components=buttons,funding-eligibility">
                    </script>
                </body>
            </Html>
        )
    }
}

export default MyDocument;