import { colors } from "./Styles"

const styles = {
  default: {
    textColor: colors.text.accent,
  },
}

export default function Button({ text, link, type = "default" }) {
  return (
    <button
      css={{
        backgroundColor: "transparent",
        padding: "10px 20px",
        color: styles[type].textColor,
      }}>
      {text}
    </button>
  )
}
