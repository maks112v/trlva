import React, { useState } from "react"
import { RichText } from "prismic-reactjs"
import { colors, breakingPoints } from "../components/Styles"
import moment from "moment"

export default function ScheduleSlice({ primary, items, schedule }) {
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
              marginBottom: 50,
              div: {
                cursor: "pointer",
                textAlign: "center",
                width: "32%",
                h3: {
                  fontSize: 33,
                  fontWeight: 400,
                  marginBottom: 0,
                  [breakingPoints.md]: {
                    fontSize: 20,
                  },
                },
                p: {
                  margin: "10px 0",
                  opacity: 0.6,
                  fontSize: 18,
                  [breakingPoints.md]: {
                    fontSize: 15,
                  },
                },
              },
            }}>
            <div
              onClick={() => setactiveTab(0)}
              css={{
                borderBottom: `2px solid ${
                  activeTab === 0 ? colors.accent : colors.dark
                }`,
              }}>
              <h3>Thursday</h3>
              <p>Nov 28, 2019</p>
            </div>
            <div
              onClick={() => setactiveTab(1)}
              css={{
                borderBottom: `2px solid ${
                  activeTab === 1 ? colors.accent : colors.dark
                }`,
              }}>
              <h3>Friday</h3>
              <p>Nov 29, 2019</p>
            </div>
            <div
              onClick={() => setactiveTab(2)}
              css={{
                borderBottom: `2px solid ${
                  activeTab === 2 ? colors.accent : colors.dark
                }`,
              }}>
              <h3>Saturday</h3>
              <p>Nov 30, 2019</p>
            </div>
          </div>
          <div
            css={{
              ">div": {
                display: "flex",
                alignItems: "center",
                padding: "30px 40px",
                p: {
                  margin: 0,
                  fontSize: 30,
                  [breakingPoints.md]: {
                    fontSize: 18,
                  },
                },
                [breakingPoints.md]: {
                  padding: "20px 20px",
                },
              },
            }}>
            {activeTab === 0
              ? schedule.day_1.map(item => (
                  <div>
                    <p css={{ whiteSpace: "nowrap" }}>
                      {moment(item.date_and_time).format("h:mm a")}
                    </p>
                    <div
                      css={{
                        flexGrow: 1,
                        height: 2,
                        backgroundColor: "black",
                        margin: "0 20px",
                        opacity: 0.5,
                      }}
                    />
                    <p>
                      <strong>{item.text}</strong>{" "}
                      {moment().unix() >
                      moment(item.date_and_time)
                        .subtract(1, "days")
                        .unix()
                        ? moment(item.date_and_time).fromNow()
                        : null}
                    </p>
                  </div>
                ))
              : null}
            {activeTab === 1
              ? schedule.day_2.map(item => (
                  <div>
                    <p css={{ whiteSpace: "nowrap" }}>
                      {moment(item.date_and_time).format("h:mm a")}
                    </p>
                    <div
                      css={{
                        flexGrow: 1,
                        height: 2,
                        backgroundColor: "black",
                        margin: "0 20px",
                        opacity: 0.5,
                        minWidth: 30,
                      }}
                    />
                    <p>
                      <strong>{item.text}</strong>{" "}
                      {moment().unix() >
                      moment(item.date_and_time)
                        .subtract(1, "days")
                        .unix()
                        ? moment(item.date_and_time).fromNow()
                        : null}
                    </p>
                  </div>
                ))
              : null}
            {activeTab === 2
              ? schedule.day_3.map(item => (
                  <div>
                    <p css={{ whiteSpace: "nowrap" }}>
                      {moment(item.date_and_time).format("h:mm a")}
                    </p>
                    <div
                      css={{
                        flexGrow: 1,
                        height: 2,
                        backgroundColor: "black",
                        margin: "0 20px",
                        opacity: 0.5,
                      }}
                    />
                    <p>
                      <strong>{item.text}</strong>{" "}
                      {moment().unix() >
                      moment(item.date_and_time)
                        .subtract(1, "days")
                        .unix()
                        ? moment(item.date_and_time).fromNow()
                        : null}
                    </p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  )
}
