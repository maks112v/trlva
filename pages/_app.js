import React from "react"
import App, { Container } from "next/app"
import Styles from "../components/Styles"
import { getPrismicApi } from "../prismic"

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const { api, ref } = await getPrismicApi(ctx)
    // const navData = await api.getSingle("nav", { ref })
    const footerData = await api.getSingle("footer", { ref })
    return { pageProps, footerData }
  }

  render() {
    const { Component, pageProps, footerData } = this.props

    return (
      <Container>
        <Component {...pageProps} footerData={footerData} />
        <Styles />
      </Container>
    )
  }
}
