import React from "react"
import styled from "styled-components"
import resume from "../../assets/Resume/Joshua_Taguicana_Resume.pdf"

const FooterContainer = styled.footer`
  height: 75vh;
  background: #121212;
  position: relative;
`

const FooterTitle = styled.h2`
  color: #fff;
  font-size: 4rem;
  padding-top: 3rem;
  margin: 0 2rem 3rem;
  @media (min-width: 48rem) {
    font-size: 4.5rem;
    margin: 0 10rem 4rem;
  }
  @media (min-width: 64rem) {
    font-size: 3.5rem;
    margin: 0 10rem 4rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterLinks = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  margin: 1rem 2rem;
  /* width: 40%; */
  @media (min-width: 48rem) {
    font-size: 2.5rem;
    margin: 1.5rem 10rem;
  }
  @media (min-width: 64rem) {
    font-size: 3rem;
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