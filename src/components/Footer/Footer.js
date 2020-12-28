import React from "react"
import styled, { keyframes } from "styled-components"
import resume from "../../assets/Resume/Joshua_Taguicana_Resume.pdf"
import tagiguana from "./../../assets/Images/tagiguana.png"

const scroll250 = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
`

const scroll350 = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-350px * 7))}
`

const scroll450 = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-450px * 7))}
`

const FooterContainer = styled.footer`
  height: 60vh;
  background: #121212;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 30rem) {
    height: 70vh;
  }
  @media (min-width: 64rem) {
    height: 60vh;
  }
`

const Slider = styled.div`
  width: 97vw;
  height: 100px;
  margin: 0;
  overflow: hidden;
  margin-top: 25px;
  position: relative;

  @media (min-width: 64rem) {
    margin: 50px 0 30px;
  }

  :before, 
  :after {
    content: " ";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100px;
    z-index: 100;
  }

  :before {
    background: linear-gradient(to right, #121212, rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 0));
    left: 0;
  }

  :after {
    background: linear-gradient(to left, #121212, rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 0));
    position: absolute;
    right: 0;
  }
`

const SliderTrack = styled.div`
  animation: ${scroll250} 120s linear infinite;
  display: flex;
  width: calc(250px * 14);
  transition: 0.8s;

  @media (min-width: 30rem) {
    width: calc(350px * 14);
    animation: ${scroll350} 120s linear infinite;
  }

  @media (min-width: 64rem) {
    width: calc(450px * 14);
    animation: ${scroll450} 120s linear infinite;
  }

  &:hover > span {
    color: #fff;
    cursor: default;
  }
`

const SliderText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 250px;
  font-size: 3rem;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  @media (min-width: 30rem) {
    width: 350px;
    font-size: 4rem;
  }
  @media (min-width: 64rem) {
    width: 450px;
    font-size: 5rem;
  }
`

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 18rem;
  margin: 0;

  @media (min-width: 30rem) {
    padding: 2rem 0;
    width: 22rem;
  }
  @media (min-width: 48rem) {
    width: 35rem;
  }
  @media (min-width: 64rem) {
    width: 48rem;
    flex-direction: row;
    justify-content: space-between;
  }
`

const LinkItem = styled.li`
  margin: 0.5rem 0;
  display: inline-block;
`

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  position: relative;
  font-weight: 300;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &:before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    top: 100%;
    background: #ddd;
  }

  &:after {
    right: 0;
    -webkit-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
  }

  &:hover:after {
    background: transparent;
    width: 100%;
  }

  &:hover:before {
    width: 100%;
    -webkit-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
    transition: width 0.6s cubic-bezier(0.7, 0, 0.3, 1);
  }

  @media (min-width: 64rem) {
    font-size: 1.1rem;
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
      <Slider>
        <SliderTrack>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
          <SliderText>CONTACT ME !</SliderText>
        </SliderTrack>
      </Slider>
      <LinkList>
        <LinkItem>
          <Link href="mailto:joshtaguicana@gmail.com">write me an email</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://linkedin.com/in/joshua-taguicana/">
            stalk me on linkedin
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://github.com/JoshTag">
            criticize my code on github
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href={resume} target="_blank" rel="noopener noreferrer">
            look at my resume
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            href="https://open.spotify.com/user/jtagzurit"
            target="_blank"
            rel="noopener noreferrer"
          >
            judge my music taste
          </Link>
        </LinkItem>
      </LinkList>
      <FooterSub>
        <Link href={tagiguana} target="_blank" rel="noopener noreferrer">
          &copy; 2020 Joshua Taguicana
        </Link>
      </FooterSub>
    </FooterContainer>
  )
}

export default Footer
