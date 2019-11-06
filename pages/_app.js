import React from "react"
import App, { Container } from "next/app"
import Styles from "../components/Styles"
import { getPrismicApi } from "../prismic"
import * as Sentry from "@sentry/browser"

Sentry.init({
  dsn: "https://c90a59b8169f427f8fe57199be384ed0@sentry.io/1763165",
})

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const { api, ref } = await getPrismicApi(ctx)
    // const navData = await api.getSingle("nav", { ref })
    const footerData = await api.getSingle("footer", { ref })
    const scheduleData = await api.getSingle("schedule", { ref })
    return { pageProps, footerData, scheduleData }
  }

  render() {
    const { Component, pageProps, footerData, scheduleData } = this.props
    return (
      <Container>
        <Component
          {...pageProps}
          footerData={footerData}
          scheduleData={scheduleData.data.body}
        />
        <Styles />
      </Container>
    )
  }
}
