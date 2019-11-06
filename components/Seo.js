import React from "react"
import Head from "next/head"
import { RichText } from "prismic-reactjs"
import { colors } from "./Styles"

export default function Seo({ data, extra }) {
  const url = "https://trlva.com"
  const author = "Relay Marketing Agency"
  const handle = "@relayma"

  const title = RichText.asText(data.title)
  const desc = RichText.asText(data.description)
  const image = data.image && data.image.url

  return (
    <Head>
      {title && <title key="title">{title}</title>}
      {title && <meta name="title" content={title} key="meta:title" />}
      {author && <meta name="author" content={author} key="meta:author" />}

      {title && <meta property="og:title" content={title} key="og:title" />}
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:type" content="website" key="og:type" />
      {desc && <meta property="og:description" content={desc} key="og:desc" />}
      {image && <meta property="og:image" content={image} key="og:image" />}
      <meta property="og:image:type" content="image/png" key="og:image:type" />
      <meta property="og:image:width" content="800" key="og:image:width" />

      {handle && <meta name="twitter:site" content={handle} key="tw:site" />}
      {title && <meta name="twitter:title" content={title} key="tw:title" />}
      {desc && <meta name="twitter:description" content={desc} key="tw:desc" />}
      {image && <meta name="twitter:image" content={image} key="tw:image" />}
      <meta name="twitter:card" content="summary_large_image" key="tw:card" />
      <meta name="theme-color" content={colors.accent} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-touch-icon.png?v=RymJjrwd7z"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png?v=RymJjrwd7z"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png?v=RymJjrwd7z"
      />
      <link
        rel="manifest"
        href="/static/favicon/site.webmanifest?v=RymJjrwd7z"
      />
      <link
        rel="mask-icon"
        href="/static/favicon/safari-pinned-tab.svg?v=RymJjrwd7z"
        color="#212e33"
      />
      <link
        rel="shortcut icon"
        href="/static/favicon/favicon.ico?v=RymJjrwd7z"
      />
      <meta name="msapplication-TileColor" content="#212e33" />
      <meta
        name="msapplication-config"
        content="/static/favicon/browserconfig.xml?v=RymJjrwd7z"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"></meta>
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
