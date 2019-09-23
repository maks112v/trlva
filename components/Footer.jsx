import { colors, breakingPoints, icons } from "./Styles"
import { RichText } from "prismic-reactjs"

export default function Footer({ footerData: { data } }) {
  console.log(data)
  return (
    <footer
      css={{
        backgroundColor: colors.dark,
        position: "relative",
        paddingTop: 200,
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
          [breakingPoints.md]: {
            left: -200,
            width: "auto",
          },
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
            marginBottom: 50,
            display: "flex",
            justifyContent: "space-between",
            ">div": {
              width: "22%",
              padding: "0px 5px",
            },
            a: {
              marginBottom: 5,
              fontSize: "1.1rem",
              textDecoration: "none",
            },
            [breakingPoints.md]: {
              flexWrap: "wrap",
              ">div": {
                width: "50%",
                padding: "0px 5px",
              },
            },
            [breakingPoints.sm]: {
              flexWrap: "wrap",
              ">div": {
                width: "100%",
                padding: "0px 5px",
              },
            },
          }}>
          <div
            css={{
              width: "30%",
              h3: {
                fontSize: 30,
                margin: 0,
                fontWeight: "normal",
                marginBottom: 20,
              },
              p: {
                margin: 0,
                fontWeight: 300,
                fontSize: 18,
                opacity: 0.7,
              },
              [breakingPoints.md]: {
                marginLeft: 0,
                marginTop: 0,
                h3: {
                  fontSize: 25,
                },
                p: {
                  fontSize: 16,
                },
              },
            }}>
            <h1>Logo</h1>
            {RichText.render(data.content)}
          </div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <h3>{RichText.asText(data.link_group_1_title)}</h3>
            {data.links_1.map(item => (
              <a href={item.link.url} target={item.target}>
                {RichText.asText(item.text)}
              </a>
            ))}
          </div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <h3>{RichText.asText(data.link_group_2_title)}</h3>
            {data.links_2.map(item => (
              <a href={item.link.url} target={item.target}>
                {RichText.asText(item.text)}
              </a>
            ))}
          </div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <h3>{RichText.asText(data.social_title)}</h3>
            {data.social_links.map(item => {
              const Icon = icons[item.icon]
              return (
                <a
                  target="_blank"
                  href={item.link.url}
                  css={{
                    backgroundColor: colors.accent,
                    padding: "10px 20px",
                    opacity: 1,
                    borderRadius: 30,
                    display: "flex",
                    alignItems: "center",
                    color: colors.text.dark,
                    maxWidth: 300,
                  }}
                  target={item.target}>
                  <Icon size="25px" css={{ marginRight: 10 }} />
                  {RichText.asText(item.text)}
                </a>
              )
            })}
          </div>
        </div>
        <div css={{ textAlign: "center", opacity: 0.6 }}>
          <p>
            Copyright © 2019{" "}
            <a href="https://relayma.com/" target="_blank">
              RelayMA
            </a>
            . All Rights Reserved. Like our custom website?{" "}
            <a href="https://www.relayma.com/portfolio/" target="_blank">
              Check out our other work.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
