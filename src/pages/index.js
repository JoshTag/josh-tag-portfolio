import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import ProjectPreview from "../components/ProjectPreview/ProjectPreview"
import Skills from "../components/Skills/Skills"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"

const ProjectContainer = styled.section`
  position: relative;
  color: #fff;
  padding: 1rem 0 2rem;
  :before {
    content: "";
    position: absolute;
    background: #fff;
    top: -119px;
    width: 100%;
    height: 120px;
    clip-path: polygon(100% 0%, -2% 100%, 100% 100%);
  }
  :after {
    content: "";
    position: absolute;
    background: #fff;
    bottom: -119px;
    width: 100%;
    height: 120px;
    clip-path: polygon(0 0, 0 100%, 102% 0);
  }
`
const ProjectTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2d2d2d;
  @media (min-width: 48rem) {
    font-size: 2.5rem;
  }
  @media (min-width: 64rem) {
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }
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
            gitHubURL
            tags
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
        {projects
          .map(({ node: project }, index) => {
            const { title, description, slug, url, gitHubURL, tags } = project
            const imageData = project.image.childImageSharp.fluid

            return (
              <ProjectPreview
                key={index}
                title={title}
                description={description}
                imageData={imageData}
                slug={slug}
                url={url}
                gitHubURL={gitHubURL}
                tags={tags}
              />
            )
          })
          .reverse()}
      </ProjectContainer>
      <Skills />
      <Footer />
    </Layout>
  )
}
