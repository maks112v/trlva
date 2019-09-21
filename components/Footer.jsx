import { colors } from "./Styles"

export default function Footer() {
  return (
    <footer
      css={{
        backgroundColor: colors.dark,
        position: "relative",
        paddingTop: 150,
      }}>
      <img
        src="/static/bottom_accent.svg"
        css={{
          position: "absolute",
          top: 0,
          right: -3,
          left: -3,
          width: "110%",
        }}
      />
      <div
        css={{
          maxWidth: 1240,
          padding: "20px 20px",
          margin: "0px auto",
        }}>
        <h1>Footer</h1>
      </div>
    </footer>
  )
}
