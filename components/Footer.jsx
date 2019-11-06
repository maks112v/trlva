import { colors, breakingPoints, icons } from "./Styles"
import { RichText } from "prismic-reactjs"

export default function Footer({ footerData: { data } }) {
  return (
    <footer
      css={{
        backgroundColor: colors.dark,
        position: "relative",
        paddingTop: 200,
        background: `url(/static/grid.svg), ${colors.dark}`,
        [breakingPoints.md]: {
          paddingBottom: 100,
        },
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
              marginBottom: 10,
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
            <img src={data.logo.url} css={{ height: 100, marginBottom: 25 }} />
            {RichText.render(data.content)}
          </div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <h3>{RichText.asText(data.link_group_1_title)}</h3>
            {data.links_1.map((item, index) => (
              <a
                key={`${data.link_group_1_title}-${index}`}
                href={item.link.url}
                target={item.target}>
                {RichText.asText(item.text)}
              </a>
            ))}
          </div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <h3>{RichText.asText(data.link_group_2_title)}</h3>
            {data.links_2.map((item, index) => (
              <a
                key={`${data.link_group_2_title}-${index}`}
                href={item.link.url}
                target={item.target}>
                {RichText.asText(item.text)}
              </a>
            ))}
          </div>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <h3>{RichText.asText(data.social_title)}</h3>
            {data.social_links.map((item, index) => {
              const Icon = icons[item.icon]
              return (
                <a
                  key={`social-${index}`}
                  target="_blank"
                  href={item.link.url}
                  css={{
                    backgroundColor: colors.darkish,
                    padding: "10px 20px",
                    opacity: 1,
                    borderRadius: 30,
                    display: "flex",
                    alignItems: "center",
                    color: colors.text.light,
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
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
