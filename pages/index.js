import React from "react"

import { getPrismicApi } from "../prismic"

import SliceResolver from "../components/SliceResolver"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

export default function IndexPage({ doc: { data }, footerData, scheduleData }) {
  return (
    <div css={{ overflowX: "hidden" }}>
      <Seo
        data={data}
        extra={
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "The Rooted Life",
  "description": "'As you therefore have received Christ Jesus the Lord, so walk in Him, rooted and built up in Him and established in the faith.'
Colossians 2:6-7",
  "image": "https://images.prismic.io/trlva/052cb919-30f9-44ec-8769-300d26c22d84_Meta+Cover%402x.jpg?auto=compress,format",
  "startDate": "2019-11-28T18:00",
  "endDate": "2019-11-30T12:00",
  "location": {
    "@type": "Place",
    "name": "First Russian Baptist Church",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "784 Dinkel Ave",
      "addressLocality": "Mt Crawford",
      "addressRegion": "VA",
      "postalCode": "22841",
      "addressCountry": "US"
    }
  }
}`,
            }}></script>
        }
      />
      {data.body.map((element, index) => (
        <SliceResolver
          key={`slice-${index}`}
          {...element}
          schedule={element.slice_type === "schedule" ? scheduleData : false}
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
