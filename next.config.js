const withOffline = require("next-offline")

module.exports = withOffline({
  target: process.env.TARGET_ENV || "server",
})
