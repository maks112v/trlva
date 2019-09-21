import React from "react"

import { RichText } from "prismic-reactjs"
import { linkResolver, getPrismicApi } from "../prismic"

import SliceResolver from "../components/SliceResolver"

export default function IndexPage({ doc: { data } }) {
  console.log(data)
  return (
    <div css={{ overflowX: "hidden" }}>
      {data.body.map((element, index) => (
        <SliceResolver key={`slice-${index}`} {...element} />
      ))}
    </div>
  )
}

IndexPage.getInitialProps = async context => {
  const { api, ref } = await getPrismicApi(context)
  const doc = await api.getSingle("homepage", { ref })
  return { doc }
}
