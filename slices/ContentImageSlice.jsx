import { RichText } from "prismic-reactjs"
import { colors, breakingPoints } from "../components/Styles"

export default function ContentImageSlice({ primary, items }) {
  return (
    <section
      css={{
        maxWidth: 1240,
        padding: "0px 20px",
        margin: "150px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ">div": {
          width: "48%",
        },
        [breakingPoints.md]: {
          margin: "100px auto",
          flexDirection: "column",
          ">div": {
            width: "100%",
          },
        },
      }}>
      <div
        css={{
          position: "relative",
          marginLeft: 30,
          marginTop: 20,
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
            opacity: 0.7,
          },
          [breakingPoints.md]: {
            order: 2,
            marginLeft: 0,
            marginTop: 0,
            h3: {
              fontSize: 25,
            },
            p: {
              fontSize: 20,
            },
          },
        }}>
        <h2
          css={{
            margin: 0,
            marginTop: -80,
            marginLeft: -30,
            position: "absolute",
            fontSize: 120,
            color: colors.text.dark,
            opacity: 0.1,
            [breakingPoints.md]: {
              fontSize: 60,
              marginTop: -40,
              marginLeft: -10,
            },
          }}>
          {RichText.asText(primary.accent_title)}
        </h2>
        {RichText.render(primary.content)}
      </div>
      <div
        css={{
          [breakingPoints.md]: {
            order: 1,
            marginBottom: 75,
          },
        }}>
        <img
          src={primary.image.url}
          css={{
            width: "100%",
            borderRadius: 30,
            boxShadow: "0 15px 38px 10px rgba(0,0,0,0.1 )",
          }}></img>
      </div>
    </section>
  )
}
