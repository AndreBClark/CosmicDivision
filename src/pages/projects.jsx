import React from 'react'
import ContentContainer from '../components/ContentContainer'
import Panel from '../components/Panel'
import { SmBtnOutline, SmBtn } from '../components/button'
import tw from 'tailwind.macro'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Img from "gatsby-image";
import { useStaticQuery, graphql } from 'gatsby'
const Flex = styled.div`
  ${tw`flex w-full`}
`
const ButtonContainer = styled(Flex)`
  ${tw`justify-between w-56 max-w-full`}
`
const Item = styled(Flex)`
  border-bottom-width: 4px;
  ${tw`w-full pb-6 mb-8 border-primary`}
  & p {
    ${tw`py-3`}
  }
`

const Thumbnail = styled(Img)`
  ${tw`w-full p-4 rounded-lg`}
  flex: 1 0 15%;
  
`
const Description = styled.div`
  flex: 0 5 85%;
  ${tw`content-start w-full px-4`}
  h2 {
    ${tw`-mt-1`}
  }
`
const Projects = ({ props }) => {
  const { dscvr, companiondice, dribbble01 }= useStaticQuery(graphql`
  query {
    dscvr: file(relativePath: { eq: "dscvr.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 412) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    companiondice: file(relativePath: { eq: "companiondice.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 412) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  dribbble01: file(relativePath: { eq: "dribbble01.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 412) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `)
  return (
    <>
      <SEO
        title={'Projects'}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <ContentContainer>
        <h1>Projects</h1>
        <Panel>
          <Item>
          <Thumbnail
              fluid={companiondice.childImageSharp.fluid}
              alt="dscvr project"
              />
          <Description >
              <h2>Companion Dice</h2>
              <p>Dice Rolling app for Playing Table Top Games</p>
            <ButtonContainer>
              <SmBtn
                as="a"
                target="_blank"
                href="https://companiondice.netlify.com/">
                Live Demo
              </SmBtn>
              <SmBtnOutline
                as="a"
                target="_blank"
                href="https://github.com/AndreBClark/companiondice">
                Github Repo
              </SmBtnOutline>
            </ButtonContainer>
            <hr />
          </Description>
          </Item>
          <Item>
          <Thumbnail
              fluid={dribbble01.childImageSharp.fluid}
              alt="dribbble Challenge" />
          <Description>
            <h2>Real Estate Dribbble sprint</h2>
            <p>
              One Day project to recreate a website mockup from a Dribbble Shot
            </p>
            <ButtonContainer>
              <SmBtn
                href="https://dribbblechallenge-realestate.netlify.com/"
                as="a">
                Live Demo
              </SmBtn>
              <SmBtnOutline
                as="a"
                href="https://github.com/AndreBClark/dribbble-realestate">
                Github Repo
              </SmBtnOutline>
            </ButtonContainer>
            <hr />
              </Description>
          </Item>
          <Item>
          <Thumbnail
              fluid={dscvr.childImageSharp.fluid}
              alt="dscvr project" className="w-full"/>
          <Description>
            <h2>DSCVR Portfolio Project</h2>
            <p>
              project to create College Portfolio Site for North Idaho College
              Graphic Design Program
            </p>
            <ButtonContainer>
              <SmBtn
                as="a"
                href="https://dscvr2019.netlify.com/"
                target="_blank">
                Live Demo
              </SmBtn>
              <SmBtnOutline
                as="a"
                href="https://github.com/AndreBClark/dscvr"
                target="_blank">
                Github Repo
              </SmBtnOutline>
            </ButtonContainer>
            <hr />
          </Description>
          </Item>
        </Panel>
      </ContentContainer>
    </>
  )
}
export default Projects
