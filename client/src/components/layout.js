import React from "react"
import "./layout.css"
import Navigation from "./Navigation"
import Footer from "./Footer"
// import { Link } from "gatsby"

const Layout = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
