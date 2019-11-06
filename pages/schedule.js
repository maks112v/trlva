import React from "react"

import { getPrismicApi } from "../prismic"

import SliceResolver from "../components/SliceResolver"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Button from "../components/Button"
import Link from "next/link"

export default function SchedulePage({
  doc: { data },
  footerData,
  scheduleData,
}) {
  return (
    <div css={{ overflowX: "hidden" }}>
      <Seo data={data} />
      {data.body.map((element, index) => (
        <SliceResolver
          key={`slice-${index}`}
          {...element}
          schedule={element.slice_type === "schedule" ? scheduleData : false}
        />
      ))}
      <div css={{ margin: "20px 0", textAlign: "center" }}>
        <Link href="/" passHref>
          <Button text="Back"></Button>
        </Link>
      </div>
      <Footer footerData={footerData} />
    </div>
  )
}

SchedulePage.getInitialProps = async context => {
  const { api, ref } = await getPrismicApi(context)
  const doc = await api.getSingle("schedulepage", { ref })
  return { doc }
}
