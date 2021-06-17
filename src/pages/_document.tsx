import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    const { locale } = this.props

    return (
      <Html>
        <Head>
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Lato:wght@400;900"
            rel="preload"
          />
          <link
            href="https://fonts.googleapis.com/css2?display=swap&amp;family=Lato:wght@400;900"
            rel="stylesheet"
          />

          {locale === 'ja' && (
            <link
              as="style"
              href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans+JP"
              rel="preload"
            />
          )}
          {locale === 'ja' && (
            <link
              href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans+JP"
              rel="stylesheet"
            />
          )}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
