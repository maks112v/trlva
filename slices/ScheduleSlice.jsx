import React, { useState } from "react"
import { RichText } from "prismic-reactjs"
import { colors, breakingPoints } from "../components/Styles"

export default function ScheduleSlice({ primary, items }) {
  const [activeTab, setactiveTab] = useState(0)
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
        <div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-around",
              div: {
                textAlign: "center",
                width: "100%",
                borderBottom: `2px solid ${colors.dark}`,
                h3: {
                  fontSize: 33,
                  fontWeight: 400,
                },
              },
            }}>
            <div css={{ borderBottomColor: activeTab ? colors.accent : "" }}>
              <h3>Thursday</h3>
            </div>
            <div>
              <h3>Friday</h3>
            </div>
            <div>
              <h3>Saturday</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
