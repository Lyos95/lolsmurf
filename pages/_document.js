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
                    <link rel="icon" type="image/png" href={require("../images/fabi.png")}></link>
                </Head>
                <body>
                    <Main />
                    <NextScript /> 
                </body>
            </Html>
        )
    }
}
export default MyDocument;