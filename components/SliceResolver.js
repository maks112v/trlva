import LandingCountDownSlice from "../slices/LandingCountDownSlice"
import ContentImageSlice from "../slices/ContentImageSlice"
import ScheduleSlice from "../slices/ScheduleSlice"
import VideoSlice from "../slices/VideoSlice"
import GallerySlice from "../slices/GallerySlice"
import SpeakersSlice from "../slices/SpeakersSlice"
import QuestionSlice from "../slices/QuestionSlice"

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
    case "gallery":
      return <GallerySlice {...rest} />
    case "speakers":
      return <SpeakersSlice {...rest} />
    case "question":
      return <QuestionSlice {...rest} />
    default:
      return <div />
  }
}
