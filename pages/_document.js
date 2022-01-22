import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <title>shoppingfy</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" /> */}
        </Head>
        <body className="bg-background-white text-black  min-h-screen  max-w-[1400px] m-auto font-noto ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
