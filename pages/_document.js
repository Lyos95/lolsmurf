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
                </Head>
                <body>
                    <Main />
                    <NextScript />                   
                    <script
                        src="https://www.paypal.com/sdk/js?client-id=AVdszeXsdUvowU-pnOqs0odD9EeZoy0hSx-7Zdf10CxYDleR-c96oEaKxEhZpoEbf1z4lGfwkpDhImqD">
                    </script>
                </body>
            </Html>
        )
    }
}

export default MyDocument;