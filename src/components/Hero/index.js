import React from "react"
import "./Hero.scss"
import styled from "styled-components"
import Title from "./Title"
import { ParallaxLayer } from "react-spring/renderprops-addons"

const HeroContainer = styled.section`
  background: radial-gradient(
    ellipse at bottom,
    #002f69 0%,
    #02275c 30%,
    #000000 100%
  );
  overflow: hidden;
  height: 140vh;
  position: relative;
  @media (min-width: 48rem) {
    height: 150vh;
  }
`

const AboutContainer = styled.div`
  position: absolute;
  width: 16rem;
  margin: auto auto 0;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 48rem) {
    width: 34rem;
  }
  @media (min-width: 64rem) {
    width: 50rem;
    font-size: 3.5rem;
    bottom: 12rem;
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

const Hero = () => {
  return (
    <HeroContainer>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
      <ParallaxLayer offset={0} speed={0.6}>
        <Title />
      </ParallaxLayer>
      <ParallaxLayer offset={.75} speed={0.4}>
      <AboutContainer>
        <AboutTitle>About</AboutTitle>
        <AboutDescription>
          I'm a new web developer dedicated to building creative websites and
          continuing to learn new skills in web development. Looking for new
          employment opportunities as well as freelance projects! Check out some
          of my projects below!
        </AboutDescription>
      </AboutContainer>
      </ParallaxLayer>
    </HeroContainer>
  )
}

export default Hero
