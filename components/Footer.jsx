import { colors } from "./Styles"

export default function Footer() {
  return (
    <footer
      css={{
        backgroundColor: colors.dark,
        position: "relative",
        paddingTop: 150,
        background: `url(/static/grid.svg), ${colors.dark}`,
      }}>
      <img
        src="/static/bottom_accent.svg"
        css={{
          position: "absolute",
          top: -3,
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
          color: "white",
        }}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            ">div": {
              width: "24%",
            },
          }}>
          <div>
            <h1>Logo</h1>
            <p>
              The day after the conference, continue learning with one of our
              expert trainers. Places are limited – first come, first served!
            </p>
          </div>
          <div>
            <h3>Important Links</h3>
          </div>
          <div>
            <h3>Learn More</h3>
          </div>
          <div>
            <h3>Find Us</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
