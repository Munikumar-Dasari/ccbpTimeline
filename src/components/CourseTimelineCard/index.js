// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div className="title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tags-list">
        {tagsList.map(eachTag => (
          <div key={eachTag.id} className="tag-container">
            <p className="tag-title">{eachTag.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
