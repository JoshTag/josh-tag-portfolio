import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import ProjectPreview from "../components/ProjectPreview"
import styled from "styled-components"

const ProjectContainer = styled.section`
  background-image: linear-gradient(270deg, #7A5CFF 0%, #30BEFF 100%);
  position: relative;
  color: #FFF;
  :before {
    content: "";
    position: absolute;
    background-image: linear-gradient(270deg, #7A5CFF 0%, #30BEFF 100%);
    top: -119px;
    width: 100%;
    height: 120px;
    clip-path: polygon(100% 0%,-2% 100%,100% 100%)
  }
  :after {
    content: "";
    position: absolute;
    background-image: linear-gradient(270deg, #7A5CFF 0%, #30BEFF 100%);
    bottom: -119px;
    width: 100%;
    height: 120px;
    clip-path: polygon(0 0,0 100%,102% 0);
  }
`
const ProjectTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      allConfigJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allConfigJson.edges

  return (
    <Layout>
      <Hero />
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        {projects.map(({ node: project }, index) => {
          const title = project.title
          const description = project.description
          const slug = project.slug
          const imageData = project.image.childImageSharp.fluid
          const url = project.url

          return (
            <ProjectPreview
              key={index}
              title={title}
              description={description}
              imageData={imageData}
              slug={slug}
              url={url}
            />
          )
        })}
      </ProjectContainer>
      {/* <Skills />
      <Education /> */}
    </Layout>
  )
}
