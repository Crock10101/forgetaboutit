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
    query nightd {
      bg: file(relativePath: { eq: "IT.jpg" }) {
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
      pic1: file(relativePath: { eq: "pic1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic2: file(relativePath: { eq: "pic2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic3: file(relativePath: { eq: "pic3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic4: file(relativePath: { eq: "pic4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
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
            <h1>Night Dispatch</h1>

            <br></br>
            <div>
              <h5>The position:</h5>
              <br></br>
              <p>
                BBI Logistics offers transportation solutions including, but not
                limited to truckload, intermodal, LTL, expedited, purchase order
                consolidation, route optimization, cold storage, and disaster
                response. As a part of our support team, you will act as the
                lifeline between our sales team and transportation partners.
              </p>
            </div>
            <div>
              <br></br>
              <h5>What you’ll be doing.</h5>
              <br></br>
              <span>
                {" "}
                • Handle a high volume of inbound and outbound phone calls,
                ensuring pick up and deliveries are on schedule.
              </span>
              <span>
                • Build relationships with carriers and customers to understand
                needs and ensure an excellent customer service experience.
              </span>
              <span>
                • Responsible for the coordination, scheduling, and planning of
                customer freight shipments.
              </span>
              <span>
                • Analyze and negotiate rates with carriers based on current
                market prices.
              </span>
              <span>
                • Update Account Managers on any issues that arise throughout
                and resolve issues in a timely and professional manner.
              </span>
              <span>
                • Ensure all proper paperwork is received for billing.
              </span>
              <span>
                • Work efficiently and effectively in a fast-paced environment.
              </span>
              <span>
                • Document and manage all tasks in our internal systems.
              </span>
              <span>
                • Respond to customers efficiently, thoroughly, and
                professionally.
              </span>
            </div>
            <div>
              <br></br>
              <h5>What we’re looking for.</h5>
              <br></br>
              <span>
                {" "}
                •	High School Diploma. Bachelor’s Degree preferred.
              </span>
              <br></br>
              <span>
                {" "}
                •	2+ years of relevant, customer service experience.
              </span>
              <span>•	Self-motivated with a strong desire to meet customer needs.</span>
              <br></br>
              <span>•	Desire for a long-term career with a fast-growing company.</span>
              <span>•	Transportation industry knowledge and experience is a plus.</span>
              <span>•	Must be able to work a flexible schedule, including weekends.</span>
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
          
        </JobWrapper>
        <PositionContainer>
            <PositionWrapper>
              <CareerCard>
                <CImg fluid={data.pic2.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
              <CareerCard>
                <CImg fluid={data.pic1.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
              <CareerCard>
                <CImg fluid={data.pic3.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
              <CareerCard>
                <CImg fluid={data.pic4.childImageSharp.fluid} alt="Logo" />
              </CareerCard>
            </PositionWrapper>
          </PositionContainer>
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
    font-size: 50px;
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
  position: absolute;
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
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  justify-items: center;
  width: 50%;
  
  padding-right: 100px;
  padding-left: 100px;

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