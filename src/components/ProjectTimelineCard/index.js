// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-duration-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit Link
      </a>
    </div>
  )
}

export default ProjectTimelineCard
