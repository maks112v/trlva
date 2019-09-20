import { RichText } from "prismic-reactjs"
import { colors } from "../components/Styles"

export default function ScheduleSlice({ primary, items }) {
  return (
    <div css={{ backgroundColor: "#F3F3F3" }}>
      <section
        css={{
          maxWidth: 1240,
          padding: "100px 20px 50px",
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
            }}>
            {RichText.asText(primary.accent_text)}
          </h2>
          {RichText.render(primary.content)}
        </div>
      </section>
    </div>
  )
}
