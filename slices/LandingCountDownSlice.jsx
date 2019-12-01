import { RichText } from "prismic-reactjs"
import { colors, breakingPoints } from "../components/Styles"

export default function LandingCountDownSlice({ primary, items }) {
  return (
    <header
      css={{
        margin: 0,
        background: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ), url(${primary.image.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        [breakingPoints.xl]: {
          height: "95vh !important",
        },
        [breakingPoints.md]: {
          height: "85vh !important",
        },
      }}>
      <div
        css={{
          maxWidth: 1240,
          padding: "0 20px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          height: "100vh",
          h1: {
            fontSize: "4rem",
            margin: 0,
            color: colors.text.light,
          },
          h4: {
            margin: 0,
            fontSize: "2.2rem",
            color: colors.text.light,
          },
          p: {
            fontSize: "1.8rem",
            maxWidth: 600,
            color: colors.text.light,
          },
          [breakingPoints.md]: {
            height: "90vh !important",
            h1: {
              fontSize: "2.5rem",
            },
            h4: {
              fontSize: "1.8rem",
            },
            p: {
              fontSize: "1.4rem",
            },
          },
        }}>
        {RichText.render(primary.content)}
      </div>

      <img
        css={{
          position: "absolute",
          bottom: -3,
          right: -3,
          left: -3,
          width: "105%",
        }}
        src="/static/accent.svg?v=5"></img>
    </header>
  )
}
