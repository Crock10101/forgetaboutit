import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GlobalStyle } from "../../components/styles/GlobalStyles"
import { Button } from "../../components/styles/Button"
import Header from "../../components/header"
import Footer from "../Footer.js"

const AccountCord = () => {
  const data = useStaticQuery(graphql`
    query recruiter {
      bg: file(relativePath: { eq: "Recruiter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      people1: file(relativePath: { eq: "meet-bbi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Container>
      <JobContainer>
        <GlobalStyle />
        <Header />

        <HImg fluid={data.bg.childImageSharp.fluid} alt="Logo" />
        <JobWrapper>
          <DetailsContainer>
            <h1>Recruiter</h1>

            <br></br>
            <div>
              <h5>The position:</h5>
              <br></br>
              <p>
              BBI Logistics is a fresh and rapidly growing company looking to add a full cycle Recruiter to our team. In this role, you will be responsible for driving the end to end hiring process from sourcing to hire. You will work in coordination with the HR team and business leaders throughout the hiring and selection process and serve as the key decision maker in building out our growing team. 
              </p>
            </div>
            <div>
              <br></br>
              <h5>What you’ll be doing.</h5>
              <br></br>
              <span>
                {" "}
                •	Manage the full cycle recruitment process to include sourcing, screening, scheduling, ATS management, offer negotiation and onboarding.
              </span>
              <span>
              •	Screen candidate applications, conduct phone interviews, and arrange in person interviews.
              </span>
              <span>
              •	Conduct one on one in-person interviews with potential candidates
              </span>
              <span>
              •	Send offer letters and coordinate pre-employment paperwork.
              </span>
              <span>
              •	Work with our existing team to build processes and implement best practices for hiring top talent.
              </span>
              <span>
              •	Market new job opportunities internally and collaborate with marketing team on how we can recruit quality candidates.
              </span>
              <span>
              •	Utilize search engines and databases to identify and qualify candidates for open positions.
              </span>
              <span>
              •	Proactively establishes and maintains beneficial business relationships through networking.
              </span>
              <span>
              •	Build and maintain effective, ongoing relationships with candidates and new employees.
              </span>
            </div>
            <div>
              <br></br>
              <h5>What we’re looking for.</h5>
              <br></br>
              <span>
                {" "}
                •	1-3 years of business experience with a minimum of 1 in recruiting or staffing.
              </span>
              <br></br>
              <span>
                {" "}
                •	Familiarity with online sourcing / recruitment tools.
              </span>
              <span>•	Excellent interpersonal and communication skills.</span>
              <br></br>
              <span>•	Ability to learn and apply modern technology and processes quickly.</span>
              <span>•	Bachelor’s Degree required. </span>
            </div>
            <div>
              <br></br>
              <h5>Who we are.</h5>
              <br></br>
              <p>
                BBI Logistics offers transportation solutions including but not
                limited to truckload, intermodal, LTL, expedited, purchase order
                consolidation, route optimization, cold storage, expedited
                delivery, and natural disaster response. As a rapidly growing
                company, BBI is quickly becoming a premier transportation
                provider nationwide.
              </p>
              <br></br>
              <h5>What draws people to BBI.</h5>
              <br></br>
              <p>
                BBI’s greatest asset are the employees. The employees make the
                fast-paced and energetic culture a place people want to be. A
                place where hard work does not go unnoticed, and your impact is
                felt at every turn. Take that and couple it with endless
                earnings and growth opportunity and you have a roadmap for
                success.
              </p>
              <br></br>
              <br></br>
              <ButtonContainer>
                <h5>Find a Path For You</h5>
                <p>
                  Did a full 180, crazy Thinking 'bout the way I was Did the
                  heartbreak change me? Maybe But look at where I ended up I'm
                  all good already So moved on, it's scary I'm not where you
                  left me at all, so
                </p>
                <Button primary="true" round="true">
                  Apply Now
                </Button>
                <br></br>
                <br></br>
                <p class="pp">
                  BBI Logistics is an Equal Opportunity Employer. All qualified
                  applicants will receive consideration for employment without
                  regard to race, color, religion, sex, sexual orientation,
                  gender identity, age, national origin, genetic information,
                  disability or protected veteran status.
                </p>
                <br></br>
                <br></br>
              </ButtonContainer>
            </div>
          </DetailsContainer>
          <PositionContainer>
            <PositionWrapper>
              <CareerCard>
                <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
              <CareerCard>
                <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
              <CareerCard>
                <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
              <CareerCard>
                <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
            </PositionWrapper>
          </PositionContainer>
        </JobWrapper>
      </JobContainer>
      <Footer />
    </Container>
  )
}

export default AccountCord

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  line-height: 1.8;
  font-size: 20px;

  content: "•";
  line-height: 2.3em;

  h1 {
    color: white;
    font-weight: bold;
    text-align: left;
    z-index: 1;
    position: absolute;
    top: 55%;
    font-size: 70px;
    text-shadow: 2px 2px 4px #000000;

    @media screen and (max-width: 500px) {
      top: 25%;
    }
    @media screen and (max-width: 270px) {
      top: 20%;
    }
  }

  h5 {
    font-weight: bold;
    font-size: 25px;
  }

  span {
    display: inline-block;
    white-space: nowrap;

    @media screen and (max-width: 1200px) {
      white-space: pre-wrap;
    }

    @media screen and (max-width: 400px) {
      white-space: pre-wrap;
    }
  }
`

const HImg = styled(Img)`
  height: 60vh;
  max-width: 100%;
  
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -100;
  background: #314e7c;
 
`

const JobContainer = styled.div``

const Container = styled.div``

const ButtonContainer = styled.div`
  text-align: center;
  line-height: 2;
  font-size: 20px;

  h5 {
    font-weight: bold;
    font-size: 35px;
  }
  .pp {
    font-weight: bold;
  }
  p {
    @media screen and (max-width: 1200px) {
      width: 550;
      white-space: pre-wrap;
    }

    @media screen and (max-width: 610px) {
      width: 400;
      white-space: pre-wrap;
    }
    span {
    }
  }
`

const JobWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 550;
    white-space: pre-wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 610px) {
    width: 400;
    white-space: pre-wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  max-width: 100%;
  position: relative;
  border-radius: 10px;
`

const PositionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const PositionContainer = styled.div`
  margin-bottom: 5rem;
  background: white;
  color: black;
`
