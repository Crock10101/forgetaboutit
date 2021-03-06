import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button, Button2, Button3 } from "../components/styles/Button"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import Header from "../components/header"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "./Footer"
import Butt from "/src/assests/pics/comb1.png"
import Navbar from "../components/Navbar"

const Careers = () => {
  const data = useStaticQuery(graphql`
    query PeopleAndcareerJson {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo1: file(relativePath: { eq: "logo-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      people1: file(relativePath: { eq: "people1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
      boo: file(relativePath: { eq: "Services.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ltl: file(relativePath: { eq: "LTL.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      semi: file(relativePath: { eq: "semi.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Growth: file(relativePath: { eq: "GrowthIcon.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Map: file(relativePath: { eq: "MapIcon.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Truck: file(relativePath: { eq: "TruckIcon.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <body>
      <GlobalStyle />
      
      <Navbar />
      <HeaderContainer>
        <HeaderBg>
          <HImg fluid={data.boo.childImageSharp.fluid} alt="Logo" />
        </HeaderBg>
        <HeaderText>
          <HeaderContent>
            <HeaderH1>SERVICES + SOLUTIONS</HeaderH1>
            
            
            <Button
              
              primary="true"
              round="true"
              css={
                "width: 180px; text-shadow: 0px 0px 0px; font-weight: normal;"
              }
              href="#job">View Openings
              
            </Button>
          </HeaderContent>
        </HeaderText>
      </HeaderContainer>
      <Col style={{ backgroundImage: `url(${Butt})` }}>
        <h1
          css={
            "color: whitesmoke; font-size: 100px;  font-weight: 600; text-align: center;"
          }
        >
          RELIABILITY
        </h1>
        <h3
          css={
            " font-weight: 600; text-align: right; padding-bottom: 40px; margin-right: 200px; margin-top: -50px; font-size: 20px;"
          }
        >
          "We deliver on promises to each other and out customers"
        </h3>
      </Col>
      <IconWrapper>
        <IconContainer>
          <div>
            <HImg fluid={data.Truck.childImageSharp.fluid} alt="Logo" />
            <p>FTL</p>
          </div>
          <div>
            <HImg fluid={data.Truck.childImageSharp.fluid} alt="Logo" />
            <p>LTL</p>
          </div>
          <div>
            <HImg fluid={data.Truck.childImageSharp.fluid} alt="Logo" />
            <p>RAIL</p>
          </div>
          <div>
            <HImg fluid={data.Map.childImageSharp.fluid} alt="Logo" />
            <p>SOS</p>
          </div>
          <div>
            <HImg fluid={data.Growth.childImageSharp.fluid} alt="Logo" />
            <p>4PL</p>
          </div>
        </IconContainer>
      </IconWrapper>
      <PuzzleWrapper>
      <section id="ftl">
        <h2>FTL</h2>
        <h5 >FULL TRUCKLOAD</h5>
        <PuzzleContainer>
          
          <Piece1>
            <CImg fluid={data.semi.childImageSharp.fluid} alt="Logo" />
          </Piece1>   
          <Piece2>
            <ul css={
                "text-align:left; padding-top: 40px; padding-left: 200px;line-height: 2.5rem; font-size: 20px; text-transform: uppercase;"
              }>
              <li>dry van</li>
             <li>Temperature controlled</li>
             <li>flatbread</li>
             </ul>
          
            <ul css={
                "text-align:left; padding-top: 40px; padding-left: 200px;line-height: 2.5rem; font-size: 20px; text-transform: uppercase;"
              }>
             <li>step deck</li>
             <li>over dimensional</li>
             <li>heavy haul</li>
             
            </ul>
          </Piece2>
        </PuzzleContainer>
        </section>
        <br></br>
        <section id="LTL">
        <h2 css={
                "text-align:center; padding-left:130px;font-weight: bold;"
              }>FTL</h2>
              <h5 css={
                "text-align:center; padding-left: 250px;"
              }>FULL TRUCKLOAD</h5>
        <PuzzleContainer2>
          <Piece2>
            <h1>Less than Truckload</h1>
            <p>
              For shipments that are large enough to fill or nearly fill an
              entire shipping container, full truckloads work out cheaper. Full
              truckloads are much less encumbered by size and weight
              restrictions. FTL shipments get to the destination sooner, as the
              truck is making no other pickups or drop-offs along the way. FTL
              transport means less handling (there is no transferring between
              trucks mid-transit), the shipment is likely to get lost or
              damaged.
            </p>
          </Piece2>
          <Piece1>
            <CImg fluid={data.ltl.childImageSharp.fluid} alt="Logo" />
          </Piece1>
        </PuzzleContainer2>
        </section>
        <br></br>
        <section id="exp">
        <h2 >FTL</h2>
              <h5 >FULL TRUCKLOAD</h5>
        <PuzzleContainer>
          
          <Piece1>
            <CImg fluid={data.semi.childImageSharp.fluid} alt="Logo" />
          </Piece1>
          
          <Piece2>
            <h1>Expedited</h1>
            <p>
              For shipments that are large enough to fill or nearly fill an
              entire shipping container, full truckloads work out cheaper. Full
              truckloads are much less encumbered by size and weight
              restrictions. FTL shipments get to the destination sooner, as the
              truck is making no other pickups or drop-offs along the way. FTL
              transport means less handling (there is no transferring between
              trucks mid-transit), the shipment is likely to get lost or
              damaged.
            </p>
          </Piece2>
        </PuzzleContainer>
        </section>
        <br></br>
        <section id="911">
        <h2 css={
                "text-align:center; padding-left:130px;font-weight: bold;"
              }>FTL</h2>
              <h5 css={
                "text-align:center; padding-left: 250px;"
              }>FULL TRUCKLOAD</h5>
        
        <PuzzleContainer2>
          <Piece2>
            <h1>Emergency</h1>
            <p>
              For shipments that are large enough to fill or nearly fill an
              entire shipping container, full truckloads work out cheaper. Full
              truckloads are much less encumbered by size and weight
              restrictions. FTL shipments get to the destination sooner, as the
              truck is making no other pickups or drop-offs along the way. FTL
              transport means less handling (there is no transferring between
              trucks mid-transit), the shipment is likely to get lost or
              damaged.
            </p>
          </Piece2>
          
          <Piece1>
            <CImg fluid={data.semi.childImageSharp.fluid} alt="Logo" />
          </Piece1>
          
        </PuzzleContainer2>
        </section>
      </PuzzleWrapper>
      
      <Footer />
    </body>
  )
}

export default Careers

const HImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;

`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
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
  top: 30%;
  width: 1200px;
  max-width: 100%;
  line-height: 1.5;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;

  @media screen and (max-width: 1250px) {
    max-width: 500px;
    display: flex;
    align-items: center;
    text-align: left;
    padding: 100px 20px;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0px 0px;
  }
`

const HeaderH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0.1rem;
`

const HeaderH2 = styled.h2`
  white-space: nowrap;
  text-align: center;
  
  letter-spacing: 3px;
  padding: 2rem;
  justify-content: center;
`
const ServiceList = styled.div`
display: grid;
height: 30vh;
white-space: pre-wrap;
grid-template-columns:  1fr 1fr;
`
const Services = styled.div`
text-align: center;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`

const PuzzleContainer = styled.div`
display: grid;
  width: 100%;
  height: 20vh;
 
  grid-template-columns:  0.5fr 0.9fr ;
  text-align: center;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  
 
  background-size: cover;
`

const PuzzleContainer2 = styled.div`
  display: grid;
  width: 100%;
  height: 20vh;
  
  grid-template-columns:  0.9fr 0.5fr ;
  text-align: center;
  align-content: space-evenly;
  justify-content: space-evenly;
  align-items: center;
  color: white;
 
  background-size: cover;
`
const PuzzleContainer3 = styled.div`
  display: grid;
  width: 100%;
  height: 25vh;
  
  text-align: center;
  padding-right: 10px;
  padding-top: 50px;
  align-content: space-evenly;
  background: linear-gradient(
    0deg,
    white 65%,
    black 5%,
    rgba(49, 78, 124) 25%
  );
  background-size: cover;
`

const Piece1 = styled.div`
  
  padding-left: 200px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  height: 20vh;
  

`
const Piece2 = styled.div`
  height: 100%;
  background: lightblue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 15px;
    font-weight: bold;
  }
`

const PuzzleWrapper = styled.div`
  flex-direction: column;
  font-size: 12px;
  vertical-align: middle;
`
const PositionContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  margin-bottom: 5rem;
  background: white;
  color: black;
`

const PositionHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: black;
`

const PositionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr, 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const CareerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const CareerCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const CImg = styled(Img)`
  height: 100%;
  max-width: 40%;
  
`

const CareerTitle = styled.div`
  font-weight: 400px;
  font-size: 1rem;
  margin-left: 0.5rem;
`

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  padding-top: 2rem;
  margin-bottom: 4rem;
  font-size: 50px;
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 786px) {
    grid-template-colums: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 100px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`
const IconWrapper = styled.div`
  
`
const IconContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: 200px 200px 200px 200px 200px;
  grid-template-rows: 200px;
  grid-gap: 100px;
  justify-content: center;
  text-align: center;
  padding-bottom: 60px;
  text-transform: uppercase;
  color: teal;
  font-weight: 600;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 100px 100px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    display: grid;
    margin-top: 10px;
    grid-gap:0px;
    grid-template-columns: 200px;
    align-items: center;
    grid-gap: 20px;
    padding-top: 30px;
  }
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
  text-align: right; padding-bottom: 0; margin-right: 0; margin-top: 0; 
}
}
`
