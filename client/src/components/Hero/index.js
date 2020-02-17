import React, { Component } from "react";
import "./Hero.scss";
import styled from "styled-components"
import Title from "./Title"
import Plx from "react-plx";

const HeroContainer = styled.section`
  background: radial-gradient(ellipse at bottom, #002f69 0%, #02275c 30%, #000000 100%);
  overflow: hidden;
  height: 120vh;
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
        endValue: -400,
        property: "translateY",
      }
    ]
  }
];

class Hero extends Component {
  render() {
    return (
      <HeroContainer >
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Plx parallaxData={parallax}>
          <Title />
        </Plx>
      </HeroContainer>
    )
  }
}

export default Hero;