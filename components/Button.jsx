import { colors } from "./Styles"

const styles = {
  default: {
    textColor: colors.text.accent,
  },
}

export default function Button({ text, href, glow, type = "default" }) {
  return (
    <a
      href={href}
      css={{
        backgroundColor: "transparent",
        padding: "10px 30px",
        textDecoration: "none",
        color: styles[type].textColor,
        border: `2px solid ${styles[type].textColor}`,
        outline: "none",
        borderRadius: 30,
        transition: "400ms",
        fontSize: "1.3rem",
        fontWeight: 500,
        textAlign: "center",
        "&:hover": {
          backgroundColor: styles[type].textColor,
          color: "white",
          border: `2px solid ${styles[type].textColor}`,
          boxShadow: glow && `0px 11px 29px 0px rgba(3,169,244,.2)`,
        },
      }}>
      {text}
    </a>
  )
}
