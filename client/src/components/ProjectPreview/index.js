import React from "react"
// import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Project = styled.article`
  height: 25rem;
  margin: 0 auto;
`

const ProjectImage = styled.div`
  width: 300px;
`

const ProjectPreview = ({ slug, title, description, imageData, url }) => {
  
  return (
    <Project>
      <h3>{title}</h3>
      <p>{description}</p>
      <ProjectImage>
        <Image fluid={imageData} fadeIn={true} />
      </ProjectImage>
    </Project>

  )
}

export default ProjectPreview
