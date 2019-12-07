import React, { Component } from "react";
import "./Footer.scss";
import resume from "../../Assets/Resume/Joshua_Taguicana_Resume.pdf";
// import github from "../../Assets/Dev Icons/github/github-original-white.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div id="starsF" />
        <div id="starsF2" />
        <div id="starsF3" />
        <ul>
          <li>
            <a href="https://github.com/JoshTag">
              {/* <img className="footer-icon" src={github} alt="git hub icon" /> */}
              GitHub
            </a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/joshua-taguicana/">LinkedIn</a>
          </li>
          <li>
            <a
              className="contact-info__email"
              href="mailto:joshtaguicana@gmail.com"
            >
              joshtaguicana@gmail.com
            </a>
          </li>
        </ul>
        <p className="footerCopyRight">&copy; 2019 Joshua Taguicana</p>
      </footer>
    );
  }
}

export default Footer;
