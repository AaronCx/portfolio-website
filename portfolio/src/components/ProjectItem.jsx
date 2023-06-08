import React from 'react'

const ProjectItem = ({img, title}) => {
  return (
    <div>
        <img src={img} alt={title} />
    </div>
  )
}

export default ProjectItem