import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Hero {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        id
        childImageSharp {
          fluid(
            maxWidth: 2400
            duotone: { highlight: "#b5179e", shadow: "#480ca8" }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <BackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <Container>
          <Row>
            <Col md={6} className="font-weight-bold text-light">
              <h1 className="display-2">
                Hi, <br />I am Jan
              </h1>
              <p>
                I'm a digital developer interested in data analysis, data
                visualisation and machine learning.
              </p>
              <Link to="/projects" className="btn btn-primary btn-lg mr-2">
                See projects
              </Link>
              <Link to="/contact" className="btn btn-danger btn-lg">
                Get in touch
              </Link>
            </Col>
          </Row>
        </Container>{" "}
      </Jumbotron>
    </BackgroundImage>
  )
}

export default Hero
