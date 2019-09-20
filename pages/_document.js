// _document is only rendered on the server side and not on the client side
import Document, { Head, Main, NextScript } from "next/document"
import { API_ENDPOINT } from "../prismic"

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    // prettier-ignore
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <link rel="shortcut icon" href="/static/images/favicon.png" />
          <link rel="stylesheet" href="https://use.typekit.net/rpu1gbr.css" />
          <link rel="stylesheet" href="/static/normalize.css" />
          <link rel="stylesheet" href="/static/outdatedbrowser/outdatedbrowser.css" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <body>
          <div id="outdated" />
          <script src="/static/outdatedbrowser/outdatedbrowser.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.onload = function() {
                outdatedBrowser({
                  bgColor: "#f25648",
                  color: "#ffffff",
                  lowerThan: "borderImage", // target IE
                  languagePath: "/static/outdatedbrowser/outdatedbrowser.html"
                })
              }`,
            }}
          />
          <Main />
          <NextScript />
          {process.env.TARGET_ENV === "serverless" ? (
            <>
              <script dangerouslySetInnerHTML={{ __html: `window.prismic = { endpoint: "${API_ENDPOINT}" }` }} />
              <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js" />
            </>
          ) : null}
        </body>
      </html>
    )
  }
}
