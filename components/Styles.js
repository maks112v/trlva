import { Global, css } from "@emotion/core"
import {
  FiInstagram,
  FiMap,
  FiTwitter,
  FiFacebook,
  FiGlobe,
} from "react-icons/fi"

export const colors = {
  accent: "#4CAF50",
  dark: "#212121",
  darkish: "#212E33",
  text: {
    light: "#fff",
    muted: "#FCF8F4",
    dark: "#212121",
    accent: "#4CAF50",
  },
}

export const icons = {
  Instagram: FiInstagram,
  Map: FiMap,
  Twitter: FiTwitter,
  Facebook: FiFacebook,
  Globe: FiGlobe,
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
          background-color: ${colors.dark};
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          font-family: "Rubik", sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          color: ${colors.text.light} !important;
        }

        p {
          color: ${colors.text.muted};
        }

        a {
          color: ${colors.text.accent};
          opacity: 0.8;
          transition: 200ms;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      `}
    />
  )
}
