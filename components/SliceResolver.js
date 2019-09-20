import LandingCountDownSlice from "../slices/LandingCountDownSlice"

export default function SliceResolver({ slice_type, ...rest }) {
  switch (slice_type) {
    case "landing_countdown":
      return <LandingCountDownSlice {...rest} />
    default:
      return <div />
  }
}
