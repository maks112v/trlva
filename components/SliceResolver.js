import LandingCountDownSlice from "../slices/LandingCountDownSlice"
import ContentImageSlice from "../slices/ContentImageSlice"

export default function SliceResolver({ slice_type, ...rest }) {
  switch (slice_type) {
    case "landing_countdown":
      return <LandingCountDownSlice {...rest} />
    case "content_with_image":
      return <ContentImageSlice {...rest} />
    default:
      return <div />
  }
}
