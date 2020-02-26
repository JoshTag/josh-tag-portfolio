import React from "react"
import Plx from "react-plx"
import styled from "styled-components"

// img imports
import css from "../../assets/Icons/css3-original-wordmark.svg"
import html from "../../assets/Icons/html5-original-wordmark.svg"
import git from "../../assets/Icons/git-original.svg"
import js from "../../assets/Icons/javascript-original.svg"
import firebase from "../../assets/Icons/firebase-icon.svg"
import mySQL from "../../assets/Icons/mysql-original-wordmark.svg"
import node from "../../assets/Icons/nodejs-original.svg"
import react from "../../assets/Icons/react-original.svg"
import scss from "../../assets/Icons/sass-original.svg"
import vue from "../../assets/Icons/vuejs-original-wordmark.svg"
import express from "../../assets/Icons/express-original-wordmark.svg"
import heroku from "../../assets/Icons/heroku-plain-wordmark.svg"
import netlify from "../../assets/Icons/netlify-icon.svg"
import gatsby from "../../assets/Icons/gatsbyjs-icon.svg"
import graphql from "../../assets/Icons/graphql-icon.svg"

import {
  parallaxCSS,
  parallaxHTML,
  parallaxGit,
  parallaxJS,
  parallaxFirebase,
  parallaxMySQL,
  parallaxNode,
  parallaxReact,
  parallaxSass,
  parallaxVue,
  parallaxGatsby,
  parallaxGraphQL,
  parallaxExpress,
  parallaxHeroku,
  parallaxNetlify
} from "./ParallaxData"

const SkillContainer = styled.section`
  padding-top: 10rem;
  background: #F5F5F5;
  overflow: hidden;
`

const SkillTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #2d2d2d;
  margin: 0;
  @media (min-width: 48rem) {
    font-size: 2.5rem;
  }
  @media (min-width: 64rem) {
    font-size: 3.5rem;
  }
`

const IconContainer = styled.div`
  width: 18rem;
  height: 38rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  justify-items: center;
  position: relative;
  margin: 3rem auto;
  @media (min-width: 30rem) {
    margin: 5rem auto;
    width: 20rem;
  }
  @media (min-width: 48rem) {
    width: 39.5rem;
    height: 28rem;
  }
  @media (min-width: 64rem) {
    width: 52rem;
    height: 30rem;
  }
`

const PlxLayer = styled(Plx)`
  height: 75px;
  width: 75px;
  margin: auto;
  @media (min-width: 30rem) {
    height: 95px;
    width: 95px;
  }
  @media (min-width: 48rem) {
    height: 120px;
    width: 120px;
  }
  @media (min-width: 64rem) {
    height: 130px;
    width: 130px;
    margin: 0 1rem;
  }
`

const Icons = styled.img`
  margin: 0;
  height: 75px;
  width: 75px;
  @media (min-width: 30rem) {
    height: 95px;
    width: 95px;
  }
  @media (min-width: 48rem) {
    height: 120px;
    width: 120px;
  }
  @media (min-width: 64rem) {
    height: 130px;
    width: 130px;
  }
`

const Skills = () => {
  return (
    <SkillContainer>
      <SkillTitle>Skills</SkillTitle>
      <IconContainer>
        <PlxLayer parallaxData={parallaxHTML}>
          <Icons src={html} alt="HTML" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxCSS}>
          <Icons src={css} alt="CSS" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxGit}>
          <Icons src={git} alt="Git" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxJS}>
          <Icons src={js} alt="JavaScript" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxSass}>
          <Icons src={scss} alt="SASS" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxGatsby}>
          <Icons src={gatsby} alt="Gatsby" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxGraphQL}>
          <Icons src={graphql} alt="GraphQl" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxReact}>
          <Icons src={react} alt="React" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxVue}>
          <Icons src={vue} alt="Vue" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxNode}>
          <Icons src={node} alt="Node" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxFirebase}>
          <Icons src={firebase} alt="Firebase" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxExpress}>
          <Icons src={express} alt="Express" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxHeroku}>
          <Icons src={heroku} alt="Heroku" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxMySQL}>
          <Icons src={mySQL} alt="mySQL" />
        </PlxLayer>
        <PlxLayer parallaxData={parallaxNetlify}>
          <Icons src={netlify} alt="Netlify" />
        </PlxLayer>
      </IconContainer>
    </SkillContainer>
  )
}

export default Skills
