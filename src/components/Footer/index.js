import React from "react"
import styled from "styled-components"
import resume from "../../assets/Resume/Joshua_Taguicana_Resume.pdf"

const FooterContainer = styled.footer`
  height: 70vh;
  background: #121212;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 37.5rem) {
    height: 50vh;
  }
`

const FooterTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  padding-top: 3rem;
  margin: 0 2rem 3rem;
  width: 18rem;
  text-align: center;
  @media (min-width: 37.5rem) {
    width: 20rem;
  }
  @media (min-width: 48rem) {
    font-size: 2.5rem;
    margin: 0 10rem 4rem;
    width: 38rem;
  }
  @media (min-width: 64rem) {
    font-size: 3.5rem;
    margin: 0 10rem 3rem;
    width: 52rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18rem;
  @media (min-width: 37.5rem) {
    flex-direction: row;
    justify-content: space-between;
    width: 20rem;
  }
  @media (min-width: 48rem) {
    width: 30rem;
  }
`

const FooterLinks = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  margin: 1rem 0;
  display: inline-block;
  width: 80px;
  text-align: center;
  @media (min-width: 48rem) {
    font-size: 1.5rem;
  }
  @media (min-width: 64rem) {
    font-size: 1.7rem;
    width: 100px;
  }
`

const FooterSub = styled.small`
  height: 7vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
  color: #fff;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Josh Tag</FooterTitle>
      <LinkContainer>
        <FooterLinks href="https://github.com/JoshTag">GitHub</FooterLinks>
        <FooterLinks href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </FooterLinks>
        <FooterLinks href="https://linkedin.com/in/joshua-taguicana/">
          LinkedIn
        </FooterLinks>
        <FooterLinks href="mailto:joshtaguicana@gmail.com">Email</FooterLinks>
      </LinkContainer>
      <FooterSub>&copy; 2020 Joshua Taguicana</FooterSub>
    </FooterContainer>
  )
}

export default Footer
