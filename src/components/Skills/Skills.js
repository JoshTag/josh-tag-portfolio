import React from "react"
import styled from "styled-components"

// Image Imports from devicons using original wordmark
import css from "../../assets/Icons/css3-original-wordmark.svg"
import html from "../../assets/Icons/html5-original-wordmark.svg"
import js from "../../assets/Icons/javascript-original.svg"
import firebase from "../../assets/Icons/firebase-icon.svg"
import mySQL from "../../assets/Icons/mysql.svg"
import node from "../../assets/Icons/nodejs.svg"
import react from "../../assets/Icons/react.svg"
import vue from "../../assets/Icons/vuejs.svg"
import gatsby from "../../assets/Icons/gatsbyjs-icon.svg"
import graphql from "../../assets/Icons/graphql-icon.svg"
import php from "../../assets/Icons/php.svg"
import mongo from "../../assets/Icons/mongodb.svg"

const SkillContainer = styled.section`
  padding-top: 10rem;
  background: #f5f5f5;
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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  justify-items: center;
  position: relative;
  margin: 3rem auto 7rem;
  
  @media (min-width: 30rem) {
    margin: 2rem auto 7rem;
    width: 20rem;
  }
  @media (min-width: 48rem) {
    width: 39.5rem;
  }
  @media (min-width: 64rem) {
    width: 52rem;
  }
`

const Icons = styled.img`
  margin: 10px;
  height: 75px;
  width: 75px;
  @media (min-width: 30rem) {
    margin: 20px 15px;
  }
  @media (min-width: 48rem) {
    margin: 20px;
    height: 75px;
    width: 75px;
  }
  @media (min-width: 64rem) {
    margin: 25px;
    height: 85px;
    width: 85px;
  }
`

const Skills = () => {
  return (
    <SkillContainer>
      <SkillTitle>Skills</SkillTitle>
      <IconContainer>
        <Icons src={html} alt="HTML" />
        <Icons src={css} alt="CSS" />
        <Icons src={js} alt="JavaScript" />
        <Icons src={php} alt="PHP" />
        <Icons src={react} alt="React" />
        <Icons src={gatsby} alt="Gatsby" />
        <Icons src={graphql} alt="GraphQL" />
        <Icons src={vue} alt="Vue" />
        <Icons src={node} alt="Node" />
        <Icons src={firebase} alt="Firebase" />
        <Icons src={mySQL} alt="mySQL" />
        <Icons src={mongo} alt="MongoDB" />
      </IconContainer>
    </SkillContainer>
  )
}

export default Skills
