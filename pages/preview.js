import qs from "qs"
import { useEffect } from "react"
import Router from "next/router"
import Prismic from "prismic-javascript"
import { API_ENDPOINT, linkResolver } from "../prismic"

export default function Preview() {
  useEffect(() => {
    const params = qs.parse(window.location.search.slice(1))
    Prismic.api(API_ENDPOINT)
      .then(api => api.previewSession(params.token, linkResolver, "/"))
      .then(url => Router.push(url))
  }, [])

  return (
    <div
      css={{
        height: "calc(100vh - 130px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "4rem",
      }}>
      <p>Loading preview...</p>
    </div>
  )
}
