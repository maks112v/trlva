import React, { useState } from "react"
import { RichText } from "prismic-reactjs"
import { colors } from "../components/Styles"
import { FiPlay } from "react-icons/fi"
import FsLightbox from "fslightbox-react"

export default function VideoSlice({ primary, items }) {
  const [toggler, setToggler] = useState(false)
  const youtubeVideos = items.map(item => item.youtube_link)
  return (
    <section
      css={{
        maxWidth: 1240,
        padding: "100px 20px 50px",
        margin: "100px auto",
      }}>
      <div
        css={{
          background: `url(${primary.image.url})`,
          width: "100%",
          paddingTop: "50%",
          borderRadius: 30,
          boxShadow: "0 15px 38px 10px rgba(0,0,0,0.1 )",
          backgroundSize: "cover",
          position: "relative",
        }}>
        <button
          onClick={() => setToggler(!toggler)}
          css={{
            position: "absolute",
            top: "50%",
            left: "46%",
            backgroundColor: colors.accent,
            height: 75,
            width: 75,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            border: "none",
            cursor: "pointer",
          }}>
          <FiPlay color={colors.text.dark} size="25px" />
        </button>
        <div css={{ position: "absolute", top: 75, left: 20 }}>
          <div
            css={{
              position: "relative",
              marginLeft: 40,
              marginTop: 30,
              color: colors.text.light,
              h3: {
                fontSize: 30,
                margin: 0,
                fontWeight: "normal",
                marginBottom: 20,
              },
              p: {
                margin: 0,
                fontWeight: 300,
                fontSize: 20,
              },
            }}>
            <h2
              css={{
                margin: 0,
                marginTop: -80,
                marginLeft: -30,
                position: "absolute",
                fontSize: 120,
                color: colors.text.light,
                opacity: 0.1,
              }}>
              {RichText.asText(primary.accent_text)}
            </h2>
            {RichText.render(primary.content)}
          </div>
        </div>
      </div>
      <FsLightbox toggler={toggler ? true : null} sources={youtubeVideos} />
    </section>
  )
}