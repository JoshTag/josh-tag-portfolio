import React, { Component } from "react";
import headshot from "../../Assets/Images/joshua-headshot.jpg";
import "./About.scss";

export class About extends Component {
  render() {
    return (
      <section className="about">
          <h2 className="about__header">About Me</h2>
          <div className="about__content">
            <img
              className="about__content__img"
              src={headshot}
              alt="Headshot"
              />
            <p className="about__content__text">
              From Toronto, I'm a new web developer dedicated to building creative websites and
              continuing to learn new skills in web development. I'm a recent grauduate of BrainStation's
              Full-Time Web Development program and currently
              working as a TA at BrainStation. Check out some of my projects
              below!
            </p>
          </div>
      </section>
    );
  }
}

export default About;
