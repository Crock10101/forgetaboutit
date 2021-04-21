import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header.js"
import { Button } from "../components/styles/Button"
import Footer from "./Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles.js"
import "../components/styles/main.css"
import Butt from "/src/assests/pics/comb1.png"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"
import Navbar from "../components/Navbar.js"

const Services = () => {
  const data = useStaticQuery(graphql`
    query People {
      people1: file(relativePath: { eq: "meet-bbi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      building: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      adam: file(relativePath: { eq: "AdamH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lexi: file(relativePath: { eq: "LexiH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      luzy: file(relativePath: { eq: "LuzyH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      aj: file(relativePath: { eq: "ajhead.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lind: file(relativePath: { eq: "lind.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      
      josh: file(relativePath: { eq: "JoshH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ben: file(relativePath: { eq: "BenH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      laura: file(relativePath: { eq: "LauraH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cbus1: file(relativePath: { eq: "tampa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      people2: file(relativePath: { eq: "people2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Growth: file(relativePath: { eq: "401k.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Map: file(relativePath: { eq: "energetic.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Truck: file(relativePath: { eq: "highfive.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      med: file(relativePath: { eq: "medical.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      profit: file(relativePath: { eq: "profit.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pto: file(relativePath: { eq: "pto.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    
    <Container>
      <GlobalStyle />
      
      <Navbar />
      <HeaderContainer>
        <HeaderBg>
          <HImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
        </HeaderBg>
        <HeaderText>
          <HeaderContent>
            <HeaderH1>JOIN OUR TEAM</HeaderH1>

            <Button
              primary="true"
              round="true"
              css={
                "display:fluid; width: 300px; text-shadow: 0px 0px 0px; font-weight: bold;  letter-spacing: 1px;"
              }
              href="#job"
            >
              VIEW OPEN POSITIONS
            </Button>
            <Social>
              <a
                href="https://www.linkedin.com/company/bbi-logistics"
                target="_blank"
              >
                <FaLinkedin
                  css={
                    "display:flex; width: 25px; text-shadow: 0px 0px 0px; font-weight: bold;  flex-wrap: wrap;color: white;"
                  }
                  pulse
                  size="xs"
                />
              </a>
              <a href="https://www.instagram.com/bbilogistics/" target="_blank">
                <FaInstagram
                  css={
                    "display:flex; width: 25px; text-shadow: 0px 0px 0px; font-weight: bold;  flex-wrap: wrap;color: white;"
                  }
                  pulse
                  size="xs"
                />
              </a>
              <a
                href="https://www.facebook.com/BBILogistics"
                target="_blank"
              >
                <FaFacebook
                  css={
                    "display:flex; width: 25px; text-shadow: 0px 0px 0px; font-weight: bold; flex-wrap: wrap;color: white;"
                  }
                  pulse
                  size="xs"
                />
              </a>
            </Social>
          </HeaderContent>
        </HeaderText>
      </HeaderContainer>
      <Col style={{ backgroundImage: `url(${Butt})` }}>
        <h1
          css={
            "color: whitesmoke; font-size: 100px;  font-weight: 600; text-align: center; letter-spacing: 2px;"
          }
        >
          TEAMWORK
        </h1>
        <h3
          css={
            " font-weight: 600; text-align: right; margin-right: 200px; margin-top: -40px; font-size: 20px;"
          }
        >
          "We accomplish more working together than we do working alone."
        </h3>
      </Col>
      <Col style={{ backgroundImage: `url(${Butt})` }}>
        <Meet>
          <Card1>
            <h1 css={"text-align: center; font-size: 130px; color: teal; "}>
              MEET OUR TEAM
            </h1>
          </Card1>
          <Card1>
            <AImg fluid={data.lind.childImageSharp.fluid} alt="Logo" />
             <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
          <Card1>
            <AImg fluid={data.aj.childImageSharp.fluid} alt="Logo" />
            <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
          <Card1>
            <AImg fluid={data.laura.childImageSharp.fluid} alt="Logo" />
            <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
          <Card1>
            <AImg fluid={data.adam.childImageSharp.fluid} alt="Logo" />
            <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
          <Card1>
            <AImg fluid={data.luzy.childImageSharp.fluid} alt="Logo" />
            <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
          <Card1>
            <AImg fluid={data.josh.childImageSharp.fluid} alt="Logo" />
            <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
          <Card1>
            <AImg fluid={data.lexi.childImageSharp.fluid} alt="Logo" />
            <Overlay>
            <Text>Hello BBI</Text>   
            </Overlay> 
          </Card1>
        </Meet>
      </Col>
      <LocationContainer>
        <HeaderH2>OFFICE LOCATIONS</HeaderH2>
        <ColumnTwo>
          <div>
            <CImg fluid={data.building.childImageSharp.fluid} alt="Logo" />
            <h1 css={"text-decoration: underline;"}>COLUMBUS, OHIO</h1>
            <p>HEADQUARTERS</p>
          </div>
          <div>
            <CImg fluid={data.cbus1.childImageSharp.fluid} alt="Logo" />
            <h1 css={"text-decoration: underline;"}>TAMPA, FLORIDA</h1>
            <p>*OPENING NOV, 2021</p>
          </div>
        </ColumnTwo>
      </LocationContainer>
      <section id="job">
        <HeaderH2>JOB POSITIONS</HeaderH2>
        <CardContainer>
          <CardStyle>
            <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>Account Coordinator</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button primary="true" round="true" to="/Positions/AccountCord/">
                  See more details or Apply Now
                </Button>
              </Card.Body>
            </Card>
          </CardStyle>
          <CardStyle>
            <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>Sales Account Specialist</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button primary="true" round="true" to="/Positions/SalesAccountSpecialist/">
                  See more details or Apply Now
                </Button>
              </Card.Body>
            </Card>
          </CardStyle>
        
          <CardStyle>
            <Card style={{ width: '30rem' }} >
              <Card.Body>
                <Card.Title>Night Dispatch</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button primary="true" round="true" to="/Positions/Night/">
                  See more details or Apply Now
                </Button>
              </Card.Body>
            </Card>
          </CardStyle>
      
        </CardContainer>
      </section>
      <IconWrapper>
        <HeaderH2>WORK PERKS</HeaderH2>
        <IconContainer>
          <div>
            <IImg fluid={data.Truck.childImageSharp.fluid} alt="Logo" />
            <p>Celebration & recognition</p>
          </div>
          <div>
            <IImg fluid={data.Map.childImageSharp.fluid} alt="Logo" />
            <p>ENERGETIC OFFICE</p>
          </div>
          <div>
            <IImg fluid={data.Growth.childImageSharp.fluid} alt="Logo" />
            <p>EMPLOYEE 401K WITH MATCH</p>
          </div>
          <div>
            <IImg fluid={data.med.childImageSharp.fluid} alt="Logo" />
            <p>HEALTH INSURANCE (+ DENTAL & VISION)</p>
          </div>
          <div>
            <IImg fluid={data.profit.childImageSharp.fluid} alt="Logo" />
            <p>PROFIT SHARING</p>
          </div>
          <div>
            <IImg fluid={data.pto.childImageSharp.fluid} alt="Logo" />
            <p>PTO</p>
          </div>
        </IconContainer>
      </IconWrapper>
      <Footer />
    </Container>
  )
}

export default Services

const Container = styled.div`
  font-family: "Titillium Web" !important;
`
const Col = styled.div`
  background-size: cover;
  letter-spacing: 1.5px;

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 20px;
      align-items: right;
      padding: 0;
      text-align: right;
      padding-bottom: 0;
      margin-right: 0;
      margin-top: 0;
    }
  }
`

const AImg = styled(Img)`
  padding: 30px;
  border-radius: 250px;
  display: block;
  
  @media screen and (max-width: 700px) {
    width: 350px;
  }
  @media screen and (max-width: 700px) {
    background: whitesmoke;
    padding: 20px;
    height: 300px;
    width: 300px;
    border-radius: 10px;
  }
`

const Meet = styled.div`
  object-fit: cover;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  text-align: center;
  justify-items: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
 grid-gap: 40px;
 padding: 20px;

 @media screen and (max-width: 1750px) {
  object-fit: cover;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  text-align: center;
  justify-items: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
 grid-gap: 40px;
 padding: 20px;
 }

 @media screen and (max-width: 1300px) {
  object-fit: cover;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  text-align: center;
  justify-items: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
 grid-gap: 40px;
 padding: 20px;
 }

 @media screen and (max-width: 900px) {
  object-fit: cover;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
 grid-gap: 20px;
 padding: 20px;
 }

  @media screen and (max-width: 700px) {
    display: flex;

    padding: 0px;

    h1 {
      font-size: 30px;
    }
    overflow: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    .gatsby-image-wrapper {
      box-sizing: inherit;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
  border-radius: 250px;

  &:hover {
    opacity: 1;
  }
`
const Text = styled.div` 
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

const Card1 = styled.div`
  object-fit: cover;
  height: 400px;
  width: 400px;
  position: relative;
  border-radius: 10px;
  p {
    font-size: 0;
  }
  h1 {
    font-size: 100px;
  }
  
  
  @media screen and (max-width: 700px) {
    h1 {
      white-space: pre-wrap;
      font-size: 100px;
      text-align: center;
      justify-content: center;
    }
    p {
      font-size: 15px;
      white-space: pre-wrap;
      width: inherit;
    }
    width: 500px;
    padding: 10px;
    border: 0px;
    width: auto;
    height: auto;
  }
`

const Card2 = styled.div`
  object-fit: cover;
  height: 300px;
  width: 500px;

  @media screen and (max-width: 700px) {
    width: 500px;
    padding: 10px;
    border: 0px;
    width: auto;
  }
`
const HImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(60%);
`
const IImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0;
  position: relative;
  color: White;
`

const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const HeaderP = styled.div`
  max-width: 550px;
  padding-bottom: 1rem;
  @media screen and (max-width: 420px) {
  }
`

const HeaderPlay = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(50%);
`

const HeaderText = styled.div`
  z-index: 3;
  max-height: 100%;
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 1200px;
  max-width: 100%;
  line-height: 1.5;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;

  @media screen and (max-width: 1250px) {
    width: 400px;
    display: flex;
    align-items: center;
    text-align: left;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0px 0px;
    width: 200px;
  }
`

const HeaderH1 = styled.h1`
  font-size: 72px;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0.1rem;

  @media screen and (max-width: 400px) {
    font-size: 30px;
    width: 300px;
    align-items: center;
    text-align: center;
  }
`

const HeaderH2 = styled.h2`
  white-space: nowrap;
  text-align: center;

  letter-spacing: 2px;
  padding: 2rem;
  justify-content: center;
`

const ServicesContainer = styled.div`
  width: 100%;
  background: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;

  padding-bottom: 4rem;
`

const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 1rem;
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-grid-template-columns: 1fr;
  }
`

const ServicesBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  border-left: 1px solid;
  border-bottom: 1px solid;
  overflow: hidden;
  margin-left: -3px;
  margin-top: 3px;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`
const CardStyle = styled.div`
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 6px;
  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  font-size: 17px;
  max-width: 600px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 30px;
  padding-bottom: 4rem;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 800px) {
    display: flex;
    grid-template-columns: 300px 300px;
    align-items: center;
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    grid-template-columns: 1fr;
    align-items: center;
  }
`
const LocationContainer = styled.div`
  background: whitesmoke;
  padding-bottom: 4rem;
`
const CImg = styled(Img)`
  background: whitesmoke;
  border-radius: 10px;
  height: 400px;
  
  @media screen and (max-width: 700px) {
    height: 300px;
  }
`
const MImg = styled(Img)``
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  
  h1 {
    padding-top: 20px;
  }

  justify-content: center;

  grid-gap: 7rem;

  @media screen and (max-width: 1300px) {
    display: grid;
    align-items: center;
    text-align: left;
    grid-template-columns: 0.5fr;
  }

  @media screen and (max-width: 700px) {
    display: grid;
    align-items: center;
    text-align: left;
    grid-template-columns: 1fr;
    padding: 30px;
  }
`

const MeetContainer = styled.div`
  @media screen and (max-width: 700px) {
  }
`
const MeetWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;

  text-align: center;
  align-content: space-evenly;
  justify-content: center;

  width: 100%;

  gap: 0px 0px;

  grid-template-areas:
    "a b d"
    "e c d";

  .a {
    grid-area: a;
  }
  .b {
    grid-area: b;
  }
  .c {
    grid-area: c;
  }
  .d {
    grid-area: d;
  }
  .e {
    grid-area: e;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0px;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    padding-left: 50px;

    overflow: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    .gatsby-image-wrapper {
      width: calc(100vw - 60px);
      max-width: 330px;
      box-sizing: inherit;
    }
  }
`
const MeetStyle = styled.div`
  padding: 20px;
`
const Description = styled.div``

const IconWrapper = styled.div``
const IconContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px;
  grid-column-gap: 300px;
  grid-row-gap: 100px;

  text-align: center;
  padding-bottom: 90px;
  text-transform: uppercase;
  color: teal;
  font-weight: 600;

  @media screen and (max-width: 1200px) {
    display: grid;
    justify-content: center;
    text-align: center;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding-top: 50px;
    padding-bottom: 0px;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    justify-content: center;
    text-align: center;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: 300px 300px;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding-top: 50px;
    padding-bottom: 0px;
  }
  @media screen and (max-width: 600px) {
    display: grid;

    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-columns: 0.5fr 0.5fr;
    align-items: center;
    grid-gap: 20px;
    padding-top: 50px;
    padding-bottom: 0px;
  }
`

const Social = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 20px 20px 20px;
  grid-gap: 30px;
  padding-top: 15px;
`
