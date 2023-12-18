import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
    return (
    <Html>
        <Head>
            <meta    name="description"
            content="Zishopo"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap"
            />
            <link rel="shortcut icon" href="/images/zishop.ico" />
        </Head>
        <body className="px-5 xl:px-16">
            <Main />
            <NextScript />
        </body>
    </Html>
    );
}
