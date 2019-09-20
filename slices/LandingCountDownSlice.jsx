import { RichText } from "prismic-reactjs"

export default function LandingCountDownSlice({ primary, items, ...rest }) {
  return (
    <header
      css={{
        margin: 0,
        background: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ), url(${primary.image.url})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "relative",
      }}>
      <div>{RichText.render(primary.content)}</div>
      <img
        css={{ position: "absolute", bottom: 0, right: 0 }}
        src="/static/accent.svg"></img>
    </header>
  )
}
