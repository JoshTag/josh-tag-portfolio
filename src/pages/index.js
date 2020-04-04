import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ProjectPreview from "../components/ProjectPreview"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const ProjectContainer = styled.section`
  position: relative;
  color: #fff;
  padding: 1rem 0 2rem;
  height: 155rem;
  background-color: #696969;
  @media (min-width: 48rem) {
    height: 105rem;
  }
  @media (min-width: 64rem) {
    font-size: 3.5rem;
    margin-bottom: 4rem;
  }
  /* :before {
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
  } */
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
    <Layout >
      <Parallax pages={5}>
      <Hero/>
      <ProjectContainer>
        <ParallaxLayer offset={0.4} speed={0.3}>
          <ProjectTitle>Projects</ProjectTitle>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.3}>
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
      </ParallaxLayer>
      </ProjectContainer>
      <Skills />
      <Footer />
      </Parallax>
    </Layout>
  )
}
