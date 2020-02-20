import React, { Component } from "react"
import "./Hero.scss"
import styled from "styled-components"
import Title from "./Title"
import Plx from "react-plx"

const HeroContainer = styled.section`
  position: relative;
  background: radial-gradient(
    ellipse at bottom,
    #002f69 0%,
    #02275c 30%,
    #000000 100%
  );
  overflow: hidden;
  height: 160vh;

`

const AboutContainer = styled.article`
  position: relative;
  width: 16rem;
  margin: 0 auto;
  bottom: -80vh;
  @media (min-width: 48rem) {
    width: 34rem;
  }
  @media (min-width: 64rem) {
    width: 50rem;
    font-size: 3.5rem;
  }
`

const AboutTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  @media (min-width: 48rem) {
    font-size: 2.5rem;
  }
  @media (min-width: 64rem) {
    font-size: 3.5rem;
  }
`

const AboutDescription = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  @media (min-width: 48rem) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  @media (min-width: 64rem) {
    font-size: 2rem;
    line-height: 3rem;
  }
`

const parallax = [
  {
    start: "self",
    end: "self",
    endOffset: 1400,
    easing: "easeOutQuad",
    properties: [
      {
        startValue: 0,
        endValue: -800,
        property: "translateY",
      },
    ],
  },
]

const aboutPlx = [
  {
    start: "self",
    end: "self",
    endOffset: "160vh",
    properties: [
      {
        startValue: 0,
        endValue: -2400,
        property: "translateY",
      },
    ],
  }
]

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Plx parallaxData={parallax}>
          <Title />
        </Plx>
        <Plx parallaxData={aboutPlx}>
          <AboutContainer>
            <AboutTitle>About</AboutTitle>
            <AboutDescription>
              I'm a new web developer dedicated to building creative websites
              and continuing to learn new skills in web development. Currently
              working as a TA at BrainStation, but looking for new
              opportunities! Check out some of my projects below!
            </AboutDescription>
          </AboutContainer>
        </Plx>
      </HeroContainer>
    )
  }
}

export default Hero
