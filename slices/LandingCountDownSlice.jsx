import { RichText } from "prismic-reactjs"
import { colors, breakingPoints } from "../components/Styles"
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
            [breakingPoints.lg]: {
              h3: {
                fontSize: 40,
              },
              h4: {
                fontSize: 25,
              },
            },
            [breakingPoints.md]: {
              h3: {
                fontSize: 35,
              },
              h4: {
                fontSize: 18,
              },
            },
          },
        }}>
        <div
          css={{
            alignSelf: "center",
            [breakingPoints.md]: {
              display: "none !important",
            },
          }}>
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
              [breakingPoints.lg]: {
                fontSize: 24,
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
        <div css={{ fontSize: 55, margin: "0 20px" }}>:</div>
        <div>
          <h3>{hours}</h3>
          <h4>Hours</h4>
        </div>{" "}
        <div css={{ fontSize: 55, margin: "0 20px" }}>:</div>
        <div>
          <h3>{minutes}</h3>
          <h4>Minutes</h4>
        </div>
        <div
          css={{
            fontSize: 55,
            margin: "0 20px",
            [breakingPoints.sm]: {
              display: "none !important",
            },
          }}>
          :
        </div>
        <div
          css={{
            [breakingPoints.sm]: {
              display: "none !important",
            },
          }}>
          <h3>{seconds}</h3>
          <h4>Seconds</h4>
        </div>
      </div>
    )
  }
}

export default function LandingCountDownSlice({ primary, items, ...rest }) {
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
        minHeight: "100vh",
        position: "relative",
        [breakingPoints.md]: {
          minHeight: "90vh !important",
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
      <div
        css={{
          position: "absolute",
          bottom: 25,
          zIndex: 1000,
          right: 0,
          left: 0,
          [breakingPoints.md]: {
            bottom: -30,
          },
        }}>
        <div
          css={{
            backgroundColor: colors.accent,
            margin: "0 auto",
            borderRadius: 20,
            width: "min-content",
            padding: "20px 50px 30px",
            boxShadow: "0 15px 38px 10px rgba(0,0,0,0.1 )",
            transition: "200ms",
            [breakingPoints.lg]: {
              padding: "20px 25px 30px",
            },
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
        css={{
          position: "absolute",
          bottom: -3,
          right: -3,
          left: -3,
          width: "105%",
        }}
        src="/static/accent.svg"></img>
    </header>
  )
}
