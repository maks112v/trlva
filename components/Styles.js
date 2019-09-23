import { Global, css } from "@emotion/core"
import {
  FiInstagram,
  FiMap,
  FiTwitter,
  FiFacebook,
  FiGlobe,
} from "react-icons/fi"

export const colors = {
  accent: "#FFC107",
  dark: "#212121",

  text: {
    light: "#fff",
    dark: "#212121",
    accent: "#FFC107",
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
          font-family: "Rubik", sans-serif;
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
