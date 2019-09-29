import React from "react"

import { RichText } from "prismic-reactjs"
import { linkResolver, getPrismicApi } from "../prismic"

import SliceResolver from "../components/SliceResolver"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

export default function IndexPage({ doc: { data }, footerData }) {
  console.log(data)

  const form = async () => {
    console.log("ran")
    const res = await fetch(
      "http://localhost:5001/askify-bd6a7/us-central1/webApi/api/v1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "o6w3IXEXgzWF8hB0FB7O",
        },
        body: JSON.stringify({ name: "Name", question: "Question" }),
      },
    )
    console.log("submit", res)
  }

  form()
  return (
    <div css={{ overflowX: "hidden" }}>
      <Seo data={data} />
      {data.body.map((element, index) => (
        <SliceResolver
          key={`slice-${index}`}
          {...element}
          schedule={
            element.slice_type === "schedule"
              ? { day_1: data.day_1, day_2: data.day_2, day_3: data.day_3 }
              : false
          }
        />
      ))}
      <Footer footerData={footerData} />
    </div>
  )
}

IndexPage.getInitialProps = async context => {
  const { api, ref } = await getPrismicApi(context)
  const doc = await api.getSingle("homepage", { ref })
  return { doc }
}
