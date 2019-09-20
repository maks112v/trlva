import React, { useState, useRef, useEffect } from "react"
import { RichText } from "prismic-reactjs"
import { colors } from "../components/Styles"
import Countdown from "react-countdown-now"

const CountDown = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
  started_message,
}) => {
  if (completed) {
    return (
      <div css={{}}>
        <h3
          css={{
            whiteSpace: "nowrap",
            margin: 0,
            marginTop: 10,
            fontSize: 50,
          }}>
          {started_message}
        </h3>
      </div>
    )
  } else {
    return (
      <div
        css={{
          display: "flex",
          ">div": {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            h3: {
              margin: 0,
              fontSize: 60,
              fontWeight: "bold",
              color: colors.text.dark,
            },
            h4: {
              margin: 0,
              fontSize: 22,
              color: colors.text.dark,
              fontWeight: "normal",
            },
            ":not(:last-child)": {
              marginRight: 20,
            },
          },
        }}>
        <div css={{ alignSelf: "center" }}>
          <h2
            css={{
              textAlign: "right",
              fontWeight: "normal",
              fontSize: 35,
              lineHeight: 1.2,
              margin: 0,
              marginTop: 10,
              marginRight: 20,
              span: {
                color: colors.text.light,
              },
            }}>
            Count&nbsp;<span>Every&nbsp;Second</span>{" "}
            Until&nbsp;the&nbsp;Conference
          </h2>
        </div>
        <div>
          <h3>{days}</h3>
          <h4>Days</h4>
        </div>
        <div css={{ fontSize: 55 }}>:</div>
        <div>
          <h3>{hours}</h3>
          <h4>Hours</h4>
        </div>{" "}
        <div css={{ fontSize: 55 }}>:</div>
        <div>
          <h3>{minutes}</h3>
          <h4>Minutes</h4>
        </div>
        <div css={{ fontSize: 55 }}>:</div>
        <div>
          <h3>{seconds}</h3>
          <h4>Seconds</h4>
        </div>
      </div>
    )
  }
}

export default function LandingCountDownSlice({ primary, items, ...rest }) {
  const [floating, setFloating] = useState(false)
  const ref = useRef()

  // useEffect(() => {
  //   function handleScroll(e) {
  //     setFloating(window.scrollY > 805)
  //   }
  //   handleScroll()
  //   document.addEventListener("scroll", handleScroll, true)
  //   return () => document.removeEventListener("scroll", handleScroll, true)
  // }, [])
  return (
    <header
      css={{
        margin: 0,
        background: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ), url(${primary.image.url})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "relative",
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
        }}>
        {RichText.render(primary.content)}
      </div>
      <div
        ref={ref}
        css={{
          position: floating ? "fixed" : "absolute",
          top: floating ? 0 : "83vh",
          zIndex: 1000,
          right: 0,
          left: 0,
        }}>
        <div
          css={{
            backgroundColor: colors.accent,
            margin: "0 auto",
            borderRadius: floating ? 0 : 20,
            width: floating ? "calc(100vw)" : "min-content",
            padding: "20px 50px 30px",
            boxShadow: "0 15px 38px 10px rgba(0,0,0,0.1 )",
            transition: "200ms",
          }}>
          <Countdown
            date={primary.start_date}
            renderer={props => (
              <CountDown
                {...props}
                started_message={RichText.asText(primary.started_message)}
              />
            )}
          />
        </div>
      </div>
      <img
        css={{ position: "absolute", bottom: 0, right: 0 }}
        src="/static/accent.svg"></img>
    </header>
  )
}
