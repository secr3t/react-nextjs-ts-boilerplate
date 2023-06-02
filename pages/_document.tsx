import Document, { Head, Html, Main, NextScript } from 'next/document';

import * as React from 'react';

// Need to create a custom _document because i18n support is not compatible with `next export`.
export default class _Document extends Document {
  // eslint-disable-next-line class-methods-use-this
  public render() {
    return (
      <Html lang="ko">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
