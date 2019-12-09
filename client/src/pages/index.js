import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import About from "../components/About"
import ProjectPreview from "../components/ProjectPreview"
import Skills from "../components/Skills"
import Education from "../components/Education"

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
            background
            image {
              childImageSharp {
                fluid {
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
      <About />
      <section name="projects">
      {projects.map(({ node: project }, index) => {
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid
        const url = project.url
        const background = project.background
        console.log(background)
        return (
          <ProjectPreview
            key={index}
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
            url={url}
            background={background}
          />
        )
      })}
      </section>
      <Skills />
      <Education />
    </Layout>
  )
}
