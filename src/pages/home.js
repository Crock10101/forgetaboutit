import React from "react"
import styled from "styled-components"
import { Button2 } from "../components/styles/Button"
import { Button } from "../components/styles/Button"
import Footer from "./Footer"
import Reel from "/src/assests/videos/BBI_15SecondReel.mp4"
import Butt from "/src/assests/pics/comb1.png"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import Navbar from "../components/Navbar"
import { FaMapPin } from "react-icons/fa"
import "../components/styles/main.css"
import Car from "/src/assests/pics/CarrierImage.jpg"
import Serv from "/src/assests/pics/ServicesImage.jpg"
import Team from "/src/assests/pics/team.png"


const Home = () => {
  
  
  const data = useStaticQuery(graphql`
    query swag {
      snip: file(relativePath: { eq: "snip.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      boo: file(relativePath: { eq: "honeybooboo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      tia: file(relativePath: { eq: "TIA.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      smart: file(relativePath: { eq: "smartway.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      BBB: file(relativePath: { eq: "comb.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      boo: file(relativePath: { eq: "honeybooboo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bptw: file(relativePath: { eq: "BPTW.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      food: file(relativePath: { eq: "food.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      nwc: file(relativePath: { eq: "nwc.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      hum: file(relativePath: { eq: "humane.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      us: file(relativePath: { eq: "US_Canada.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      adam: file(relativePath: { eq: "adam.PNG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      people1: file(relativePath: { eq: "meet-bbi.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      poop: file(relativePath: { eq: "HomePageLogos.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <body>
      
      <Navbar />
      <VideoContainer>
        <ZeroBg>
          <VideoPlay
            class="overlay"
            autoPlay
            loop
            muted
            playsInline
            src={Reel}
            type="video/mp4"
          />
        </ZeroBg>
        <VideoText>
          <div>
            <h1 css={" font-weight: 600"}>BUILT ON BETTER INTEGRITY</h1>
          </div>
          <VideoContent></VideoContent>
        </VideoText>
      </VideoContainer>
      <Col style={{ backgroundImage: `url(${Butt})` }}>
        <ColWrapper>
          <h1
            css={
              "text-align: center;  padding: 20px; font-weight: 600; z-index: 21"
            }
          >
            GROW WITH US
          </h1>
         
        </ColWrapper>
        
      </Col>
      <div class="row expand-column-wrapper">
  <div style={{ backgroundImage: `url(${Serv})`}} class="column">
    <h4>SHIPPERS</h4>
    
    <p class="expand-column-content">Leverage our vast carrier network to improve efficiency in your supply chain. We tailor our solutions around your needs to guarantee the most reliable transportation in the industry.  The ability to adapt and scale our team around your needs allows us to grow together.</p>
  </div>
  <div style={{ backgroundImage: `url(${Car})`}} class="column">
  <h4>CARRIERS</h4>
    <p  class="expand-column-content">Utilize our dedicated freight to help maximize your load potential. We can provide you with reliable backhauls, long miles, local runs, and expedited shipments. Our 24/7/365 support and technology allow for easy updates and hassle-free billing.</p>
  </div>
  <div style={{ backgroundImage: `url(${Team})`}} class="column">
  <h4>EMPLOYEMENT OPPURTUNITY</h4>
    <p class="expand-column-content">over each section</p>
  </div>
</div>

      <ColContainer></ColContainer>
      <CredsWrapper>
        <CredContainer>
          <CredContent>
            <h7>
              <span css={" color: Navy; font-weight: 600"}>
                {" "}
                BUILT ON BETTER INTRGRITY
              </span>
              , a company that customers endorse, carriers prefer, and employees
              are proud of. WE go the{" "}
              <span css={" color: teal"}>extra mile</span> to ensure exceptional
              transportation solutions and scalability.
            </h7>
            <Credd>
              <div>
                <h3>25,000+</h3>
                <p>Carrier Network</p>
              </div>
              <div>
                <h3>800+</h3>
                <p>Clients Served</p>
              </div>
              <div>
                <h3>4</h3>
                <p>Years of Service</p>
              </div>
              <div>
                <h3>100%+</h3>
                <p>YOY Growth </p>
              </div>
            </Credd>
          </CredContent>
          <CredContent2>
            <CImg fluid={data.poop.childImageSharp.fluid} alt="Logo" />
          </CredContent2>
        </CredContainer>
      </CredsWrapper>

      <Col1 style={{ backgroundImage: `url(${Butt})` }}>
        <h1
          css={
            "color: whitesmoke; font-size: 150px;  font-weight: 600; text-align: center;"
          }
        >
          PHILANTHROPIC
        </h1>
        <h3
          css={
            " font-weight: 600; text-align: right; padding-bottom: 40px; margin-right: 200px; margin-top: -60px; font-size: 30px;"
          }
        >
          "We give back to the communities in which we work."
        </h3>
        <PhilWrapper>
          <p css={"  text-align: center; font-size: 20px;; padding: 20px;"}>
            {" "}
            PROUD SUPPORTERS OF:
          </p>
          <PhilContainer>
            <div>
              <CImg fluid={data.hum.childImageSharp.fluid} alt="Logo" />
            </div>
            <div></div>
            <div>
              {" "}
              <CImg fluid={data.nwc.childImageSharp.fluid} alt="Logo" />
            </div>

            <div></div>
            <div>
              <CImg fluid={data.food.childImageSharp.fluid} alt="Logo" />
            </div>
          </PhilContainer>
        </PhilWrapper>
      </Col1>
      <Footer />
    </body>
  )
}

export default Home

const HImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: white;
  z-index: 20;
`
const HeaderBg = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 1100px;
`
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  z-index: 1;
  padding: 0 1rem;
  position: relative;
  
  color: White;

  h1 {
    margin-bottom: 1.5rem;
    letter-spacing: 3px;

    text-shadow: 0px 0px 20px black;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const Credd = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
width: auto;
padding-top: 100px;

@media screen and (max-width: 500px) {
 grid-template-columns: 1fr;
 display: grid;
  }
`
const ZeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const VideoPlay = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(45%);
`

const VideoText = styled.div`
  z-index: 3;
  font-size: 70px;
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  background-size: cover;
  background-color: rgba(0, 0, 0, 0 0.5);
  margin: 0;
  width: 100%;
`

const VideoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  align-content: space-evenly;
  max-height: 100%;

  line-height: 1.1.%;
  font-weight: bold;
`

const VideoH1 = styled.h1`
  font-size: 20px;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  color: red;
  text-shadow: 0px 0px 20px black;
`
const Container = styled.div``
const PuzzleContainer = styled.div`
  display: grid;
  width: 100%;

  padding-top: 20px;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  flex-direction: column;
  background: linear-gradient(
    -120deg,
    white 49%,
    black 1%,
    rgba(49, 78, 124) 50%
  );
`

const Piece1 = styled.div`
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
  color: white;

  h2 {
    font-size: 30px;
    text-shadow: 0px 0px 20px black;
  }

  p {
    font-size: 40px;
    font-weight: bold;
    text-shadow: 0px 0px 20px black;
  }
`
const Piece2 = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  text-shadow: 0px 0px 20px whitesmoke;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 40px;
    font-weight: bold;
  }
`

const PuzzleWrapper = styled.div`
  flex-direction: column;
`
const CredsWrapper = styled.div``
const CredContainer = styled.div`
  display: grid;
  justify-content: center;
  overflow: hidden;
  align-content: space-evenly;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  width: 100%;

  height: 100vh;

  
`

const CredLogo = styled.div`
  display: table-cell;
  justify-content: center;
  overflow: hidden;
  margin-left: -1px;
  margin-top: -1px;
  width: 100%;
  height: 80vh;
`
const Cred = styled.div`
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  justify-content: center;
  overflow: hidden;
  z-index: 50;
  padding-top: 3rem;
  float: left;
  height: 175px;
  width: 175px;
  display: table;
  align-items: center;
  justify-content: center;

  text-align: center;
`

const CImg = styled(Img)``

const CarImg = styled(Img)`
  max-height: 29vh;
`
const CredContent2 = styled.div`
  text-align: left;
  letter-spacing: 2px;
  
  
  width: 100%;
  h3 {
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
  }

  p {
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: teal;
  }

  h7 {
    font-weight: bold;
    
  }

  @media screen and (max-width: 800px) {
    display: flex;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    flex-direction: column;
    margin: 70px;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    flex-direction: column;
    margin: 70px;
    padding: 0;
  }
`
const CredContent = styled.div`
  text-align: left;
  letter-spacing: 2px;
  padding:150px;
  
  width: 100%;
  h3 {
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
  }

  p {
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: teal;
  }

  h7 {
    font-weight: bold;
    
  }

  @media screen and (max-width: 800px) {
    display: flex;
    grid-template-columns: 300px 300px;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    flex-direction: column;
    margin: 70px;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    flex-direction: column;
    margin: 70px;
    padding: 0;
  }
`
const CredContent1 = styled.div`
  text-align: left;
  letter-spacing: 2px;
  padding: 70px;
  margin: 80px;
  align-content: space-evenly;
  width: 100%;
  border-left: 2px solid black;
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 100px 100px 100px;
  gap: 55px 55px;
  grid-template-areas:
    "a b . ."
    ". c d ."
    "e f . .";

.a { grid-area: a; }
.b { grid-area: b; }
.c { grid-area: c; }
.d { grid-area: d; }
.e { grid-area: e; }
.f { grid-area: f; }
`
const CarouselContainer = styled.div`
  height: 50vh;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

const CarouselWrapper = styled.div``


const Col1 = styled.div`

@media screen and (max-width: 500px) {
h1 {
  font-size: 48px;
}

h3 {
  font-size: 20px;
  align-items: right;
  padding: 0;
  text-align: right; padding-bottom: 0; margin-right: 0; margin-top: -0; 
}
}
background-size: cover;
`

const ColWrapper = styled.div``

const ColContainer = styled.div`
 
 display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:2fr;
  padding-right: 200px;
  padding-left: 200px;

  h3 {
    font-weight: 700;
    text-decoration: underline;
  }
  
`
const ServiceD = styled.div`
  background-color: rgba(0,128,128 ,0.5 );
  padding: 30px;
  align-content: space-evenly; 
  border-right: 5px solid white;
  letter-spacing: 1px;
 

  @media screen and (max-width: 800px) {
    display: flex;
    font-size: 20px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    display: grid;
    font-size: 19px;
    grid-template-columns: 1fr;
    align-items: center;
  }
`

const ContentC = styled.div`
  margin-top: 20vh;
  padding: 40px;
 
`

const Col = styled.div`
  background-size: cover;
  letter-spacing: 5px;
  height: 20vh;
  font-size: 80px;

  @media screen and (max-width: 800px) {
    display: flex;
    font-size: 20px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 19px;
    grid-template-columns: 1fr;
    align-items: center;
  }
`
const PhilWrapper = styled.div`

`
const PhilContainer = styled.div`
  background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 400px 200px 400px;
  grid-template-rows: 100px;
  grid-gap: 40px;

  @media screen and (max-width: 1100px) {
    display: flex;
    grid-template-columns:200px 200px 200px;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    flex-direction: column;
    margin: 70px;
    background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 100px;
  grid-gap: 40px;
    
  }
  @media screen and (max-width: 700px) {
    display: flex;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    align-content: space-evenly;
    flex-direction: column;
    margin: 70px;
    background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 100px;
  grid-gap: 40px;

  }
`

const column = styled.div`
 float: left;
  width: 33.33%;
  padding: 50px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  color: white;
`

const containerTab = styled.div`
padding: 20px;
  color: white;
`

const row = styled.div`
row:after {
  content: "";
  display: table;
  clear: both;
}
`

const closebtn = styled.div`
float: right;
  color: white;
  font-size: 35px;
  cursor: pointer;
`

const UList = styled.ul`
position:absolute;
  
  left:0;
  right:0;
  margin:auto;
  list-style:none;
  width:955px;
  height:450px;
  border-radius:3px;
  overflow:hidden;
 
  ul li:first-child {
  border:none;

  ul:hover li {
  width:50px;  
}
 
 
ul li:hover {
  width:750px;
}

}

`
const List = styled.li`

position:relative;
  width:190px;
  height:450px;
  float:left;
  border-left:1px solid white;
  transition:all 0.7s;
 
`
const ListContent = styled.span`
display:block;
  position:absolute;
  bottom:0;
  width:50%;
  color:black;
  white-space:nowrap;
  padding:20px;
  font-weight: 700;

`

const UImg = styled(Img)`

width:800px;
  height:450px;
`

 

 