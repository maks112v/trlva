import WebpackPwaManifest from "webpack-pwa-manifest"

plugins: [
  new WebpackPwaManifest({
    name: "The Rooted Life",
    short_name: "trlva",
    description:
      "Our desire is that each person has been rooted in Christ Jesus to succeed in this life.",
    background_color: "#4CAF50",
    crossorigin: "use-credentials", //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve("static/favicon.png"),
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      },
    ],
  }),
]
