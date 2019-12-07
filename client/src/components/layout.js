import React from "react"
import Footer from "../components/Footer"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
