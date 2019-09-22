import { colors, breakingPoints } from "../components/Styles"
import { RichText } from "prismic-reactjs"

export default function GallerySlice({ primary, items }) {
  return (
    <section
      css={{
        maxWidth: 1240,
        padding: "50px 20px",
        margin: "100px auto",
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
            maxWidth: 600,
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
          {RichText.asText(primary.accent_text)}
        </h2>
        {RichText.render(primary.content)}
      </div>
      <div css={{ display: "flex", flexWrap: "wrap" }}>
        {items.slice(0, 8).map(item => (
          <div
            css={{
              padding: 10,
              width: "25%",
              [breakingPoints.md]: {
                width: "50%",
              },
              [breakingPoints.sm]: {
                width: "100%",
              },
            }}>
            <img
              src={item.image.url}
              css={{ width: "100%", borderRadius: 20 }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
