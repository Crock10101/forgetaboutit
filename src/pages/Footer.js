import React from "react"
import styled from "styled-components"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterLink to="/About">ABOUT</FooterLink>
        <br></br>
        <FooterLink to="/Service">SERVICES</FooterLink>
        <br></br>

        <FooterLink to="/Carrier">CARRIERS</FooterLink>
      </div>
      <div>
        <FooterLink to="/Career">JOIN OUR TEAM</FooterLink>
        <br></br>
        <FooterLink to="/Service">CONTACT US</FooterLink>
        <br></br>
        <FooterLink to="/About">GET A QUOTE</FooterLink>
      </div>

      <FooterLinkItems>
        <FooterLinkTitle>FOLLOW US ON SOCIAL MEDIA</FooterLinkTitle>
        <Social>
          <a
            href="https://www.linkedin.com/company/bbi-logistics"
            target="_blank"
          >
            <FaLinkedin
              css={
                "display:flex; width: 25px; text-shadow: 0px 0px 0px; font-weight: bold;  flex-wrap: wrap;color: #314e7c;"
              }
              pulse
              size="xs"
            />
          </a>
          <a href="https://www.instagram.com/bbilogistics/" target="_blank">
            <FaInstagram
              css={
                "display:flex; width: 25px; text-shadow: 0px 0px 0px; font-weight: bold;  flex-wrap: wrap;color: #314e7c;"
              }
              pulse
              size="xs"
            />
          </a>
          <a href="https://www.facebook.com/BBILogistics" target="_blank">
            <FaFacebook
              css={
                "display:flex; width: 25px; text-shadow: 0px 0px 0px; font-weight: bold; flex-wrap: wrap;color: #314e7c;"
              }
              pulse
              size="xs"
            />
          </a>
        </Social>
      </FooterLinkItems>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  height: 30vh;
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: #000;
  background: #fafafafb;
  cursor: pointer;
  font-style: bold;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    height: auto;
    text-align: center;
  }
`
const Social = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 20px 20px 20px;
  grid-gap: 30px;
  padding-top: 15px;

  &:hover {
    color: #6fccdd;
    transition: 0.3s ease-out;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 400px) {
    padding: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  font-style: bold;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const centered = styled.div`
  text-align: center;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  white-space: nowrap;
  &:hover {
    color: #6fccdd;
    transition: 0.3s ease-out;
    text-decoration: none;
  }
`

const FooterLink1 = styled.div`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 30px;

  color: #3d3d4e;

  &:hover {
    color: #6fccdd;
    transition: 0.3s ease-out;
  }
`

const FooterLinkTitle = styled.div`
  font-size: 14px;
  display: flex;

  margin-bottom: 16px;
`
