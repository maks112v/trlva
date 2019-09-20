import { Global, css } from "@emotion/core"

export const colors = {
  accent: "#FFC107",
  text: {
    light: "#fff",
    dark: "#212121",
    accent: "#FFC107",
  },
}

export const breakingPoints = {
  xl: "@media (max-width: 1200px)",
  lg: "@media (max-width: 1000px)",
  md: "@media (max-width: 800px)",
  sm: "@media (max-width: 600px)",
}

export default function Styles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        @font-face {
          font-family: "HelveticaNeue";
          src: url("/static/fonts/HelveticaNeue.ttf") format("truetype"),
            url("/static/fonts/HelveticaNeue.woff") format("woff"),
            url("/static/fonts/HelveticaNeue.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "HelveticaNeue";
          src: url("/static/fonts/HelveticaNeue-Light.ttf") format("truetype"),
            url("/static/fonts/HelveticaNeue-Light.woff") format("woff"),
            url("/static/fonts/HelveticaNeue-Light.woff2") format("woff2");
          font-weight: lighter;
          font-style: normal;
        }

        @font-face {
          font-family: "HelveticaNeue";
          src: url("/static/fonts/HelveticaNeue-Bold.ttf") format("truetype"),
            url("/static/fonts/HelveticaNeue-Bold.woff") format("woff"),
            url("/static/fonts/HelveticaNeue-Bold.woff2") format("woff2");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "HelveticaNeue";
          src: url("/static/fonts/HelveticaNeue-Thin.ttf") format("truetype"),
            url("/static/fonts/HelveticaNeue-Thin.woff") format("woff"),
            url("/static/fonts/HelveticaNeue-Thin.woff2") format("woff2");
          font-weight: 300;
          font-style: normal;
        }

        body {
          font-family: "HelveticaNeue";
        }
      `}
    />
  )
}
