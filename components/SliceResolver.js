import LandingCountDownSlice from "../slices/LandingCountDownSlice"
import ContentImageSlice from "../slices/ContentImageSlice"
import ScheduleSlice from "../slices/ScheduleSlice"
import VideoSlice from "../slices/VideoSlice"

export default function SliceResolver({ slice_type, ...rest }) {
  switch (slice_type) {
    case "landing_countdown":
      return <LandingCountDownSlice {...rest} />
    case "content_with_image":
      return <ContentImageSlice {...rest} />
    case "schedule":
      return <ScheduleSlice {...rest} />
    case "video":
      return <VideoSlice {...rest} />
    default:
      return <div />
  }
}
