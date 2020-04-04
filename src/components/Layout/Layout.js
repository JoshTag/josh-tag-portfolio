import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata
  const { title, description, keywords } = siteMetadata

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <html lang="en"/>
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default Layout
