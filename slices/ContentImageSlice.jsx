import { RichText } from "prismic-reactjs"
import { colors } from "../components/Styles"

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
          },
        }}>
        <h2
          css={{
            margin: 0,
            marginTop: -50,
            marginLeft: -30,
            position: "absolute",
            fontSize: 70,
            color: colors.text.dark,
            opacity: 0.2,
          }}>
          {RichText.asText(primary.accent_title)}
        </h2>
        {RichText.render(primary.content)}
      </div>
      <div>
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