import LandingSlice from "../slices/LandingSlice"

export default function SliceResolver({ slice_type, ...rest }) {
  switch (slice_type) {
    case "landing":
      return <LandingSlice {...rest} />
    default:
      return <div />
  }
}
