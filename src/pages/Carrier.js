import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button, Button2 } from "../components/styles/Button"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import Header from "../components/header"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "./Footer"
import Butt from "/src/assests/pics/comb1.png"
import Navbar from "../components/Navbar"

const Carrier = () => {
  const data = useStaticQuery(graphql`
    query poop {
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
      comb: file(relativePath: { eq: "comb.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      boo: file(relativePath: { eq: "Carriers1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
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
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Truck: file(relativePath: { eq: "highfive.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      med: file(relativePath: { eq: "medical.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      profit: file(relativePath: { eq: "profit.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pto: file(relativePath: { eq: "pto.png" }) {
        childImageSharp {
          fluid( quality: 100) {
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
      size: file(relativePath: { eq: "GrowthIcon.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ass: file(relativePath: { eq: "MapIcon.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      fuck: file(relativePath: { eq: "TruckIcon.png" }) {
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
            <HeaderH1>START HAULING</HeaderH1>
            
            
            <Button
              
              primary="true"
              round="true"
              css={
                "width: 230px; text-shadow: 0px 0px 0px; font-weight: normal;"
              }
              href="#job">CONTACT US 24/7/365
              
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
          INTEGRITY
        </h1>
        <h3
          css={
            " font-weight: 600; text-align: right; padding-bottom: 40px; margin-right: 200px; margin-top: -50px; font-size: 20px;"
          }
        >
          "We choose to do the right thing in a reliable way, even if it means more work."
        </h3>
        <IconWrapper>
        
        <IconContainer>
        <div>
            <IImg fluid={data.Truck.childImageSharp.fluid} alt="Logo" />
            <p>ACCESS TO 10,000+ LOADS EACH WEEK</p>
          </div>
          <div>
            <IImg fluid={data.Map.childImageSharp.fluid} alt="Logo" />
            <p>DEDICATED CARRIER RELATIONS TEAM</p>
          </div>
          <div>
            <IImg fluid={data.Growth.childImageSharp.fluid} alt="Logo" />
            <p>FREIGHT OF ALL SIZES AND COMMODITIES</p>
          </div>
          <div>
            <IImg fluid={data.med.childImageSharp.fluid} alt="Logo" />
            <p>IN-HOUSE, NIGHT AND WEEKEND DISPATCH</p>
          </div>
          <div>
            <IImg fluid={data.profit.childImageSharp.fluid} alt="Logo" />
            <p>WORRY-FREE PAYMENT OPTIONS</p>
          </div>
          <div>
            <IImg fluid={data.pto.childImageSharp.fluid} alt="Logo" />
            <p>AROUND THE CLOCK SUPPORT 24/7/365</p>
          </div>
        </IconContainer>
      </IconWrapper>
      </Col>
      <PuzzleWrapper>
      <section id="ftl">
        <h2>FTL</h2>
        <h5 >FULL TRUCKLOAD</h5>
        <PuzzleContainer>
          
          <Piece1>
            <CImg fluid={data.semi.childImageSharp.fluid} alt="Logo" />
          </Piece1>   
          <Piece2>
            <h1>Full Truckload</h1>
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

export default Carrier

const HImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;

`

const IImg = styled(Img)`
  
  
  
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
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0.1rem;
`
const IconWrapper = styled.div`
  
`
const IconContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px;
  grid-column-gap: 300px;
  grid-row-gap:100px;
  
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
  grid-row-gap:0;
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
  grid-row-gap:0;
    grid-template-columns: 0.5fr;
    align-items: center;
    grid-gap: 20px;
    padding-top: 50px;
    padding-bottom: 0px;
    
  }
`


const PuzzleContainer = styled.div`
display: grid;
  width: 100%;
  height: 25vh;
 
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
  height: 25vh;
  
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
  height: 25vh;
  

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

const CImg = styled(Img)`
  height: 100%;
  max-width: 75%;
`