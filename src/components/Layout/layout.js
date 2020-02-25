import React from "react"
import { Helmet } from "react-helmet"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Portfolio site for Joshua Taguicana - Software Developer"/>
        <meta name="keywords" content="Software Developer, Web Design, Front-End, Back-End, Programmer, HTML, CSS, JavaScript, React, Vue, Gatsby"/>
        <html lang="en"/>
        <title>Joshua Taguicana</title>
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default Layout
