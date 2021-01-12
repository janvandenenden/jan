import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const About = () => {
  const data = useStaticQuery(graphql`
    query Image {
      aboutme: file(relativePath: { eq: "about-me.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <h1 className="display-4 text-center mt-4 mb-2">About me</h1>
      <p className="text-center small">Things you might want to know</p>
      <Row className="my-5">
        <Col md={6}>
          <p>
            After obtaining my Masters degree in Sociology I’ve worked as an
            academic researcher at the Free University of Brussels, a project
            manager at a market research firm and as a coach at a web
            development bootcamp. The last year I’ve been working on my own
            projects and learning new skills, like SEO and social media &
            content marketing. Currently I am looking for a job as a front-end
            developer and/or digital project manager and/or data scientist. You
            can find my full resume here.
          </p>
        </Col>
        <Col>
          <Img
            alt="Jan hiking in New Zealand"
            fixed={data.aboutme.childImageSharp.fixed}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default About
