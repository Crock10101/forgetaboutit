import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/Fa"
import { Button } from "./styles/Button"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      Logo: file(relativePath: { eq: "are.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  
  return (
    <Nav>
      <GlobalStyle />
      <NavLinkImg to="/">
        <LImg fluid={data.Logo.childImageSharp.fluid} />
      </NavLinkImg>
      <Bars />
      <NavBtn>
        <NavLink to="/About">ABOUT US</NavLink>
        <NavLink to="/Service">SERVICES</NavLink>
        <NavLink to="/Carrier">CARRIERS</NavLink>
        <NavLink to="/Career">JOIN OUR TEAM</NavLink>
      </NavBtn>
    </Nav>
    
  )
}

export default Header

const Nav = styled.nav`
  background: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative;
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
`

const NavLink = styled(Link)`
  color: #314e7c;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    color: black;
    text-decoration: none;
    background-color: white;
  }
`
const NavLinkImg = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: black;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: right;

  @media screen and (max-width: 786px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const LImg = styled(Img)`
  z-index: 101;
  width: 300px;
  height: 40px;
`
