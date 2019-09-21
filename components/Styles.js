import { Global, css } from "@emotion/core"

export const colors = {
  accent: "#FFC107",
  dark: "#212121",

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

        body {
          font-family: "Rubik", sans-serif;
        }
      `}
    />
  )
}
