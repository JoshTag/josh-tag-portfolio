import React from "react"
import { Link } from "react-scroll"
import "./Navigation.scss"

const Nav = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <Link to="about" spy={true} smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link to="projects" spy={true} smooth={true} duration={800}>
              Projects
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link to="skills" spy={true} smooth={true} duration={800}>
              Skills
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link to="education" spy={true} smooth={true} duration={800}>
              Education
            </Link>
          </li>
          <li className="header__nav-list-item">
            <p>Change Theme</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
