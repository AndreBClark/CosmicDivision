import { Link } from "gatsby"
import React from "react"
import Button from "../components/button"
import Hero from "../components/Hero"
import TemplateWrapper from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import theme from "../../config/theme"
import SvgLogo from "../components/Svglogo"

const HeadingOne = styled.h1`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: 0;
`

class IndexPage extends React.Component {
  render() {
    const siteTitle = `Cosmic Division`

    return (
      <TemplateWrapper location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Hero>
          <div>
            <HeadingOne>Andre Clark</HeadingOne>
            <h2>Front End Developer</h2>
            <Link to="/blog/" style={{ textDecoration: "none" }}>
              <Button marginTop="35px">Go to Blog</Button>
            </Link>
          </div>
          <SvgLogo
            fill={"none"}
            stroke={theme.colors.primary}
            strokeWidth={`4px`}
            height={"40vh"}
          />
        </Hero>
      </TemplateWrapper>
    )
  }
}

export default IndexPage
