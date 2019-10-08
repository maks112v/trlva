import React, { useState } from "react"
import { colors, breakingPoints } from "../components/Styles"
import { RichText } from "prismic-reactjs"

export default function QuestionSlice({ primary, items, ...rest }) {
  const [name, setname] = useState("")
  const [question, setquestion] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const [submitted, setsubmitted] = useState(false)

  const submitQuestion = e => {
    e.preventDefault()
    setisLoading(true)
    fetch("https://api.askify.link/v1/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "HPge8F1edDulQtf80bkR",
      },
      body: JSON.stringify({ name, question }),
    }).then(res => {
      setisLoading(false)
      setname("")
      setquestion("")
      setsubmitted(true)
    })
  }
  return (
    <div>
      <section
        css={{
          maxWidth: 1240,
          padding: "100px 20px 50px",
          margin: "50px auto",
          display: "flex",
          alignItems: "center",
          [breakingPoints.md]: {
            flexDirection: "column",
          },
        }}>
        <div css={{ flexGrow: 1 }}>
          <h3 css={{ fontWeight: 400, fontSize: 30, margin: "0" }}>
            {RichText.asText(primary.text)}
          </h3>
          <p
            css={{
              color: colors.text.dark,
              opacity: 0.8,
              margin: 0,
              fontSize: 20,
              fontWeight: 300,
            }}>
            Ask us any appropriate question and we will try to answer
          </p>
        </div>
        <form
          onSubmit={submitQuestion}
          css={{
            display: "flex",
            alignItems: "center",
            [breakingPoints.md]: {
              width: "100%",
              marginTop: 25,
              flexDirection: "column",
            },
          }}>
          <input
            value={name}
            onChange={e => setname(e.target.value)}
            css={{ display: "none" }}
          />
          <textarea
            placeholder="Ask away..."
            value={question}
            onChange={e => setquestion(e.target.value)}
            type=""
            minLength={3}
            required
            rows={2}
            disabled={isLoading}
            css={{
              resize: "none",
              padding: "10px 10px",
              margin: 0,
              outline: "none",
              border: `2px solid #0288D1`,
              borderRadius: 5,
              marginRight: 20,
              fontSize: 16,
              minWidth: 350,
              [breakingPoints.md]: {
                minWidth: 0,
                marginRight: 0,
                width: "100%",
              },
              "&:focus": {
                border: `2px solid ${colors.accent}`,
              },
            }}></textarea>
          <button
            disabled={isLoading}
            css={{
              padding: "10px 10px",
              margin: 0,
              border: `2px solid ${isLoading ? colors.dark : colors.accent}`,
              backgroundColor: isLoading ? colors.dark : colors.accent,
              color: "white",
              fontSize: 20,
              borderRadius: 5,
              outline: "none",
              cursor: "pointer",
              [breakingPoints.md]: {
                marginTop: 20,
                width: "100%",
                fontSize: 16,
              },
            }}>
            {isLoading ? "Sending..." : submitted ? "Sent" : "Send it our way"}
          </button>
        </form>
      </section>
    </div>
  )
}
