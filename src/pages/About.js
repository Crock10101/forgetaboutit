import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "../components/styles/Button"
import Butt from "/src/assests/pics/comb1.png"
import Header from "../components/header"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "./Footer"
import Navbar from "../components/Navbar"

const About = () => {
  const data = useStaticQuery(graphql`
    query pool {
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
      people1: file(relativePath: { eq: "AboutUs.png" }) {
        childImageSharp {
          fluid (maxWidth: 2048, quality: 100){
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
      boo: file(relativePath: { eq: "Carriers1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
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
      <AboutWrapper>
      <HeaderContainer>
        <HeaderBg>
          <HImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
        </HeaderBg>
        <HeaderText>
          <HeaderContent>
            <HeaderH1>ABOUT US</HeaderH1>

            <Button
              primary="true"
              round="true"
              css={
                "display:fluid; width: 200px; text-shadow: 0px 0px 0px; font-weight: bold;  letter-spacing: 1px;"
              }
              href="#job"
            >
              JOIN OUR TEAM
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
          DEDICATION
        </h1>
        <h3
          css={
            " font-weight: 600; text-align: right; padding-bottom: 40px; margin-right: 200px; margin-top: -50px; font-size: 20px;"
          }
        >
          "We alwys give 100% effort. This is the one variable we can control"
        </h3>
      </Col>
      <IconWrapper>
        <IconContainer>
          <div>
            <HImg fluid={data.Truck.childImageSharp.fluid} alt="Logo" />
            <p>Carriers in all 50 states + canada</p>
          </div>
          <div>
            <HImg fluid={data.Map.childImageSharp.fluid} alt="Logo" />
            <p>Carriers in all 50 states + canada</p>
          </div>
          <div>
            <HImg fluid={data.Growth.childImageSharp.fluid} alt="Logo" />
            <p>Carriers in all 50 states + canada</p>
          </div>
        </IconContainer>
      </IconWrapper>
      <Col style={{ backgroundImage: `url(${Butt})` }}>
        <h1
          css={
            "color: whitesmoke; font-size: 170px;  font-weight: 600; text-align: left; padding-left: 250px; margin-bottom: -130px;"
          }
        >
          OUR STORY
        </h1>

        <TimeWrapper>
          <TimeContainer>
            <p>
              After graduating from the University of Kentucky with a degree in
              Finance, founder and President Brent Bosse began his search for a
              career that would be exciting, rewarding, and challenging. Through
              networking and discussions Brent was introduced to the
              transportation industry.
            </p>
            <p>
              Over the next decade, Brent completely immersed himself into
              learning as much as he could about the art of sales, the world of
              logistics, and the key players throughout. As a young
              freight-broker, his motivation grew as he began to realize the
              sheer size of the industry and the endless opportunity within.
            </p>
            <p>
              In 2016, after a lot of hard work and learning, Brent set his
              sights on making his own mark in transportation. His vision was to
              build a company with a brand name that would be recognized and
              compete with the best. BBI, “Built on Better Integrity” is the
              very essence and foundation of the company.
            </p>
            <p>
              BBI was established on November 1st, 2017, when the first
              truckload was booked to run from Utah to Pennsylvania. The first
              three employees, Brent Bosse, Kenny Johnson and Brandon Hanley ran
              all operations from the small startup office at Easton Town Center
              in Columbus, Ohio. Within the first year of operation BBI
              Logistics grossed $12 million in revenue and grew headcount to 19
              employees and that was truly just the beginning...
            </p>
          </TimeContainer>
        </TimeWrapper>
      </Col>
      
      <Col style={{ backgroundImage: `url(${Butt})` }}>
      <ValueWrapper>
        <ValueContainer>
          <div>
          <h4>MISSION</h4>
          
          <p>Built on Better Integrity, a company that customers endorse, carriers prefer, and employees are proud of. We go the extra mile to ensure exceptional transportation solutions and scalability. </p>
          </div>
         
      
          
        </ValueContainer>
      </ValueWrapper>
      </Col>
      
      <HeaderContainer>
        <HeaderBg>
          <BImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
        </HeaderBg>
        <HeaderText2 css={
                " font-weight: bold;  letter-spacing: 1px; TEXT-ALIGN: CENTER; "
              }>
                
                <h2>VALUES</h2>
          <h3>INTEGRITY</h3>
          <p>WE CHOOSE TO DO THE RIGHT THING IN A RELLIABLE WAY, EVEN IF IT MEANS MORE WORK</p>
          <h3>TEAMWORK</h3>
          <p>WE ACCOMPLISH MORE WORKING TOGETHER THAN WE DO WORKING ALONE</p>
          <h3>DEDICATION</h3>
          <p>WE ALWAYS GIVE 100% EFFORT. THIS IS THE ONE VARIABLE WE CAN CONTROL.</p>
          <h3>RELIABILITY</h3>
          <p>WE DELIVER ON PROMIES TO EACH OTHER AND TO UT CUSTOMERS.</p>
          
          <h3>PHILANTHROPIC</h3>
          <p>WE GIVE BACK TO THE COMMUNITIES IN WHICH WE WORK</p>
        </HeaderText2>
      </HeaderContainer>
      </AboutWrapper>
      <Footer />
    </body>
  )
}

export default About

const AboutWrapper = styled.div`


`

const HImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;

`

const BImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(40%);

`

const TImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(40%);

`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0;
  position: relative;
  color: White;
  h2 {
    text-decoration: underline;
    
    font-weight: 800;
    letter-spacing: 1px;
    color: white ;
    text-align: left;
  }
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

  h3 {
    color: white;
    font-weight: 700;
    text-shadow: 0px 0px 5px black;
    
  }
  p {
    color: white;
    font-weight: 700;
    text-shadow: 0px 0px 5px black;
    line-height: 2.5rem;
  }
`
const HeaderText2 = styled.div`
  z-index: 3;
  max-height: 100%;

  h3 {
    color: white;
    font-weight: 700;
    text-shadow: 0px 0px 5px black;
    
  }
  p {
    color: white;
    font-weight: 700;
    text-shadow: 0px 0px 5px black;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 100px 100px;
    align-items: center;

  }
  @media screen and (max-width: 500px) {
    display: grid;
    margin-top: 10px;
    grid-gap:0px;
    grid-template-columns: 300px;
    align-items: center;
    padding-top: 30px;

    p {
        font-size: 0;
    }
  }
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
  grid-template-rows: 200px;
  grid-gap: 200px;
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
const TimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`

const TimeContainer = styled.div`

width: 40%;
  margin: auto;
  position: relative;
  
p {
    font-size: 1em;
  line-height: 1.75em;
  border-top: 3px dashed;
  
  border-image-slice: 1;
  border-width: 7px;
  margin: 0;
  padding: 30px;
  counter-increment: section;
  position: relative;
  color: $black;

}
p:nth-child(odd) {
  border-right: 7px dashed;
  padding-left: 0;
  border-width: 5px;
  border-radius: 5px;
  &:before {
    left: 100%; 
    margin-left: -20px;
  }
}
//even number borders
p:nth-child(even) {
  border-left: 7px dashed;
  padding-right: 0;
  border-width: 5px;
  border-radius: 5px;
  &:before {
    right: 100%; 
    margin-right: -40px;
  }
}
//handle first and last
p:first-child {
  border-top: 0;
  border-top-right-radius: 30;
  border-top-left-radius:30;
}
p:last-child {
  border-bottom-right-radius:30;
  border-bottom-left-radius:30;
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 20px;
  }
    width: 300px;
  }
`
const ValueWrapper = styled.div`
  
`
const ValueContainer = styled.div`
  
  margin: auto;
  width: 50%;
 
  
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr ;


  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 100px 100px;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    display: grid;
    margin-top: 10px;
    grid-gap:0px;
    grid-template-columns: 300px;
    align-items: center;
    grid-gap: 20px;
    width: 100%;
    padding-top: 30px;
  }
  h4 {
    text-decoration: underline;
    line-height: 3rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: Navy ;
  }
  p {
    
    color: gray;
  }
`