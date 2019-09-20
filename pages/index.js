import React from "react"

import { RichText } from "prismic-reactjs"
import { linkResolver, getPrismicApi } from "../prismic"

import SliceResolver from "../components/SliceResolver"

export default function IndexPage() {
  return (
    <>
      {/* {data.body.map((element, index) => (
        <SliceResolver key={`slice-${index}`} {...element} />
      ))} */}
      <header css={{ position: "relative", textAlign: "center" }}>
        <h1>Welcome to Starter</h1>
      </header>
    </>
  )
}

// IndexPage.getInitialProps = async context => {
//   const { api, ref } = await getPrismicApi(context)
//   const doc = await api.getSingle("homepage", { ref })
//   return { doc }
// }
