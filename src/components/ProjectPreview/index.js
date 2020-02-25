import React from "react"
import Image from "gatsby-image"
import styled, {keyframes} from "styled-components"
import dragon from "../../assets/Images/dragon.svg"
import corgi from "../../assets/Images/corgi.svg"
import corgiButt from "../../assets/Images/corgi-butt.svg"
import millenniumFalcon from "../../assets/Images/millennium-falcon.svg"
import token from "../../assets/Images/token.svg"

const spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }

  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`

const shake = keyframes`
  0%,
  100% {
    transform-origin: 80% 80%;
  }
  10%, 30%, 50% {
    transform: rotate(0deg)
  }
  20%, 40% {
    transform: rotate(5deg)
  }
`

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-7px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
`

const twerk = keyframes`
  0%, 55% { transform: translate(2px, 1px) rotate(3deg); }
  10%, 85% { transform: translate(-1px, -5px) rotate(-3deg); }
  20%, 45% { transform: translate(-2px, 0px) rotate(4deg); }
  30%, 95% { transform: translate(3px, 2px) rotate(0deg); }
  40%, 35% { transform: translate(2px, -1px) rotate(3deg); }
  50%, 75% { transform: translate(-1px, 2px) rotate(-4deg); }
  60%, 25% { transform: translate(-2px, 1px) rotate(0deg); }
  70%, 65% { transform: translate(2px, 1px) rotate(-4deg); }
  80%, 15% { transform: translate(-1px, -3px) rotate(2deg); }
  90%, 5% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(4px, -1px) rotate(-2deg); }
`

const projectTheme = {
  "Warcraft Auctions": {
    bg: "linear-gradient(270deg, #5CB2FF 0%, #005DFF 100%)",
    bs: "0 14px 20px -6px rgba(0,89,255,0.50), 0 14px 20px -6px rgba(0,0,0,0.50)",
    img: token,
    mockup: {
      width: "80px",
      widthLarge: "100px",
      bottom: "1.5rem",
      bottomLarge: "2.5rem",
      left: "11rem",
      leftLarge: "15rem"
    },
  },
  "Webdev Slayer": {
    bg: "linear-gradient(270deg, #A922FF 0%, #611EFF 100%)",
    bs: "0 14px 20px -5px rgba(73,0,255,0.50), 0 14px 20px -5px rgba(0,0,0,0.50)",
    img: dragon,
    mockup: {
      width: "110px",
      widthLarge: "190px",
      bottom: "1.5rem",
      bottomLarge: "2.5rem",
      left: "9rem",
      leftLarge: "12rem",
    },
  },
  "Star Wars Database": {
    bg: "linear-gradient(270deg, #324758 0%, #0F1723 100%)",
    bs: "0 14px 20px -5px rgba(25,41,70,0.50), 0 14px 20px -5px rgba(0,0,0,0.50)",
    img: millenniumFalcon,
    mockup: {
      width: "130px",
      widthLarge: "190px",
      bottom: "3.5rem",
      bottomLarge: "3.8rem",
      left: "3.75rem",
      leftLarge: "5.5rem",
    },
  },
  "Dog Hot Dog": {
    bg: "linear-gradient(270deg, #FFB400 0%, #FF5520 100%)",
    bs: "0 14px 20px -5px rgba(255,82,0,0.50), 0 14px 20px -5px rgba(0,0,0,0.50)",
    img: {
      body: corgi,
      butt: corgiButt,
    },
    mockup: {
      width: "80px",
      widthLarge: "120px",
      bottom: "1.6rem",
      left: "-.2rem",
      body: {
        width: "130px",
        widthLarge: "180px",
        bottom: "rem",
        bottomLarge: "2rem",
        left: "3.75rem",
        leftLarge: "6rem",
      },
      butt: {
        width: "65px",
        widthLarge: "100px",
        bottom: ".7rem",
        bottomLarge: ".8rem",
        left: "-.5rem",
        leftLarge: "-.8rem",
      },
    },
  },
}


const Project = styled.article`
  width: 18rem;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px -3px rgba(0, 0, 0, 0.5);
  background-image: ${props => props.bg};
  transition: 0.4s;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 30px -3px rgba(0, 0, 0, 0.5);
  }
  :hover #project-1-hover {
    animation: ${spin} 3.2s ease-in-out infinite;
  }
  :hover #project-2-hover {
    animation: ${shake} 2.5s linear infinite;
  }
  :hover #project-3-hover {
    animation: ${float} 3.5s linear infinite;
  }
  :hover #project-4-hover {
    animation: ${twerk} 6s infinite alternate;
  }
  @media (min-width: 37.5rem) {
    width: 20rem;
  }
  @media (min-width: 48rem) {
    width: 38rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
  }
  @media (min-width: 64rem) {
    width: 52rem;
    padding: 1rem 3.5rem;
  }
`

const ProjectDetailsLeft = styled.div`
  width: 15rem;
  @media (min-width: 48rem) {
    height: 18rem;
  }
  @media (min-width: 64rem) {
    position: relative;
    width: 18rem;
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.25rem 0;
  font-weight: 400;
  @media (min-width: 48rem) {
    font-size: 1.75rem;
  }
  @media (min-width: 64rem) {
    font-size: 2rem;
  }
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 64rem) {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
`

const BtnContainer = styled.div`
  @media (min-width: 64rem) {
    position: absolute;
    bottom: 1.25rem;
  }
`

const ProjectButtons = styled.a`
  text-decoration: none;
  text-align: center;
  width: 6.5rem;
  border: solid 1px #fff;
  padding: 0.5rem 1rem;
  margin: 0 1rem 2rem 0;
  display: inline-block;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 4px 14px -1px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  overflow: hidden;
  position: relative;
  :hover {
    cursor: pointer;
    box-shadow: 0 6px 20px -1px rgba(0, 0, 0, 0.5);
  }
  :after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    width: 50px;
    -webkit-transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transform: rotate(35deg);
        -ms-transform: rotate(35deg);
            transform: rotate(35deg);
    z-index: -10;
  }
  :hover:after {
    left: 120%;
    -webkit-transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (min-width: 64rem) {
    margin: 0 1rem 0 0;
    width: 7rem;
  }
`

const ProjectDetailsRight = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 64rem) {
    width: 20rem;
    margin-top: 2rem;
  }
`

const ProjectTags = styled.p`
  font-size: 0.9rem;
  margin: 1.75rem 0;
  @media (min-width: 48rem) {
    font-size: 1rem;
  }
  @media (min-width: 64rem) {
    height: 60px;
  }
`

const ProjectMockup = styled(Image)`
  box-shadow: ${props => props.bs};
  border-radius: 10px;
`

const MockupAsset = styled.div`
  position: absolute;
  width: ${props => props.mockup.width};
  bottom: ${props => props.mockup.bottom};
  left: ${props => props.mockup.left};
  @media (min-width: 64rem) {
    width: ${props => props.mockup.widthLarge};
    left: ${props => props.mockup.leftLarge};
    bottom: ${props => props.mockup.bottomLarge};
  }
`

const CorgiAsset = styled.div`
  position: absolute;
  width: ${props => props.mockup.width};
  bottom: ${props => props.mockup.bottom};
  left: ${props => props.mockup.left};
  @media (min-width: 64rem) {
    width: ${props => props.mockup.widthLarge};
  }
`
const CorgiButt = styled.img`
  position: absolute;
  width: ${props => props.mockup.width};
  bottom: ${props => props.mockup.bottom};
  left: ${props => props.mockup.left};
  @media (min-width: 64rem) {
    width: ${props => props.mockup.widthLarge};
    left: ${props => props.mockup.leftLarge};
    bottom: ${props => props.mockup.bottomLarge};
  }
`

const ProjectPreview = ({
  gitHubURL,
  title,
  description,
  imageData,
  url,
  tags,
  slug
}) => {
  return (
    <Project bg={projectTheme[title].bg}>
      <ProjectDetailsLeft>
        <ProjectTitle>{title.toUpperCase()}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <BtnContainer>
          <ProjectButtons target="_blank" rel="noopener" href={url}>
            Live Site
          </ProjectButtons>
          <ProjectButtons target="_blank" rel="noopener" href={gitHubURL}>
            Git Repo
          </ProjectButtons>
        </BtnContainer>
      </ProjectDetailsLeft>
      <ProjectDetailsRight>
        <ProjectMockup
          fluid={imageData}
          fadeIn={true}
          title={title}
          bs={projectTheme[title].bs}
        />
        <MockupAsset mockup={projectTheme[title].mockup}>
          {title === "Dog Hot Dog" ? (
            <CorgiAsset mockup={projectTheme[title].mockup}>
              <img src={projectTheme[title].img.body} alt="Project Asset" />
              <CorgiButt
                src={projectTheme[title].img.butt}
                alt="Project Asset"
                mockup={projectTheme[title].mockup.butt}
                id={`${slug}-hover`}
              />
            </CorgiAsset>
          ) : (
            <img
              id={`${slug}-hover`}
              src={projectTheme[title].img}
              alt="Project Asset"
            />
          )}
        </MockupAsset>
        <ProjectTags>Tags: {tags}</ProjectTags>
      </ProjectDetailsRight>
    </Project>
  )
}

export default ProjectPreview
