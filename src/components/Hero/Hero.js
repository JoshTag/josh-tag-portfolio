import React, { Component } from "react"
import "./Hero.scss"
import styled from "styled-components"
import Title from "./Title/Title"
import Plx from "react-plx"

const HeroContainer = styled.section`
  background: radial-gradient(ellipse at bottom, #373737 0%, #000 100%);
  overflow: hidden;
  height: 150vh;

  @media (min-width: 48rem) {
    height: 170vh;
  }
`

const AboutContainer = styled.article`
  position: relative;
  width: 16rem;
  margin: 0 auto;
  bottom: -90vh;
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
    endOffset: "200vh",
    easing: "easeInOutQuad",
    properties: [
      {
        startValue: 230,
        endValue: -500,
        property: "translateY",
      },
    ],
  },
]

const aboutPlx = [
  {
    start: "self",
    end: "self",
    endOffset: "200vh",
    easing: "easeInOutQuad",
    properties: [
      {
        startValue: 0,
        endValue: -1000,
        property: "translateY",
      },
    ],
  },
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
              I'm a web developer dedicated to building creative websites and
              continuing to learn new skills in web development. Currently
              looking for new employment opportunities as well as freelance
              projects! Check out some of my projects below!
            </AboutDescription>
          </AboutContainer>
        </Plx>
      </HeroContainer>
    )
  }
}

export default Hero
