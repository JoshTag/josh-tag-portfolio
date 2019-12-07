import React, { Component } from "react";
import Plx from "react-plx";
import "./Skills.scss";

// img imports
import css from "../../Assets/Dev Icons/css3/css3-original-wordmark.svg";
import html from "../../Assets/Dev Icons/html5/html5-original-wordmark.svg";
import git from "../../Assets/Dev Icons/git/git-original.svg";
import js from "../../Assets/Dev Icons/javascript/javascript-original.svg";
import mongo from "../../Assets/Dev Icons/mongodb/mongodb-original-wordmark.svg";
import mySQL from "../../Assets/Dev Icons/mysql/mysql-original-wordmark.svg";
import node from "../../Assets/Dev Icons/nodejs/nodejs-original-wordmark.svg";
import react from "../../Assets/Dev Icons/react/react-original.svg";
import scss from "../../Assets/Dev Icons/sass/sass-original.svg";
import vue from "../../Assets/Dev Icons/vuejs/vuejs-original-wordmark.svg";

import {
  parallaxCSS,
  parallaxHTML,
  parallaxGit,
  parallaxJS,
  parallaxMongo,
  parallaxMySQL,
  parallaxNode,
  parallaxReact,
  parallaxSass,
  parallaxVue
} from "./ParallaxData";

export class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer" name="skills">
        <h2 className="skillsContainer__header">Skills</h2>
        <div className="skillsContainer__icons">
          <Plx parallaxData={parallaxCSS}>
            <img className="skillsContainer__icons--img" src={css} alt="CSS" />
          </Plx>
          <Plx parallaxData={parallaxHTML}>
            <img
              className="skillsContainer__icons--img"
              src={html}
              alt="HTML"
            />
          </Plx>
          <Plx parallaxData={parallaxGit}>
            <img className="skillsContainer__icons--img" src={git} alt="Git" />
          </Plx>
          <Plx parallaxData={parallaxJS}>
            <img
              className="skillsContainer__icons--img"
              src={js}
              alt="JaaScript"
            />
          </Plx>
          <Plx parallaxData={parallaxNode}>
            <img
              className="skillsContainer__icons--img"
              src={node}
              alt="Node"
            />
          </Plx>
          <Plx parallaxData={parallaxMySQL}>
            <img
              className="skillsContainer__icons--img"
              src={mySQL}
              alt="mySQL"
            />
          </Plx>
          <Plx parallaxData={parallaxMongo}>
            <img
              className="skillsContainer__icons--img"
              src={mongo}
              alt="MongoDB"
            />
          </Plx>
          <Plx parallaxData={parallaxReact}>
            <img
              className="skillsContainer__icons--img"
              src={react}
              alt="React"
            />
          </Plx>
          <Plx parallaxData={parallaxSass}>
            <img
              className="skillsContainer__icons--img"
              src={scss}
              alt="SASS"
            />
          </Plx>
          <Plx parallaxData={parallaxVue}>
            <img className="skillsContainer__icons--img" src={vue} alt="Vue" />
          </Plx>
        </div>
      </div>
    );
  }
}

export default Skills;
