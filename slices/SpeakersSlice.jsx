import { RichText } from "prismic-reactjs"
import { colors, breakingPoints } from "../components/Styles"

export default function SpeakersSlice({ primary, items }) {
  return (
    <section
      css={{
        maxWidth: 1240,
        padding: "0 20px",
        margin: "150px auto",
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
      <div
        css={{
          display: "flex",
          flexWrap: "wrap",
          margin: "50px 0",
        }}>
        {items.map(item => (
          <div
            css={{
              width: "33%",
              textAlign: "center",
              margin: "10px 0 40px",
              [breakingPoints.md]: {
                width: "50%",
              },
              [breakingPoints.sm]: {
                width: "100%",
              },
            }}>
            <div css={{ padding: "0 50px", maxWidth: 300, margin: "0 auto" }}>
              <img
                css={{
                  width: "100%",
                  borderRadius: "50%",
                  boxShadow: "0 15px 38px 10px rgba(0,0,0,0.1 )",
                }}
                src={item.image.url}></img>
            </div>
            <h3 css={{ fontSize: 30, fontWeight: 500, margin: "10px 0" }}>
              {RichText.asText(item.name)}
            </h3>
            <h4
              css={{ fontSize: 20, fontWeight: 400, opacity: 0.6, margin: 0 }}>
              {RichText.asText(item.location)}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}
