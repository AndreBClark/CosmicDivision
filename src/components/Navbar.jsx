import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.svg"
import tw from 'tailwind.macro'

const Header = styled.header`
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 1rem;
  font-weight: 600;
  border-bottom: solid ${props => props.theme.stroke}
    ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.grey.dark};
`

const Nav = styled.nav`
  max-width: ${props => props.theme.maxWidth};
  ${tw`leading-tight mx-1 my-2`}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
  a {
    ${tw`mx-auto`}
    display: flex;
    align-items: center;
    h3 {
      display: none;
      padding: 0 1.5rem;
      font-size: 2rem;
      margin-bottom: 0;
      text-transform: ${theme.fontFamily.logoCase};
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
    padding: 0;
    a h3 {
      display: inline;
    }
  }
`
const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  li {
    margin: 1rem 0;
  }
`

const Navbar = () => {
  return (
      <Header>
        <Nav>
          <Link
            to="/"
            id="logo"
            aria-label="Cosmic division Website Logo Home Button">
            <Logo
              width="48" 
              />
            <span>Cosmic Division</span>
          </Link>
          <List>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/bio">Bio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </List>
        </Nav>
      </Header>
  )
}

export default Navbar
