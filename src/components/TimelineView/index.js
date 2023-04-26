// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
    }
    return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
  }
  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="sub-heading">
            MY JOURNEY OF <br />
            <span className="main-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
