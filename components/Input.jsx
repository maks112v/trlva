import React from "react"

export default function Input({ text }) {
  return (
    <input
      placeholder={text}
      css={{
        padding: "10px 5px",
        margin: "10px 0",
        borderRadius: 5,
        border: "1px solid #212121",
        outline: "none",
      }}></input>
  )
}
