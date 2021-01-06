import React from "react"
import { Link } from "gatsby"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Hero = () => {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="display-2">Hi, I am Jan</h1>
            <p>
              I'm a freelance digital developer interested in data analysis,
              data visualisation and artificial intelligence. Have fun and check
              out my projects!
            </p>
            <Link to="/projects" className="btn btn-primary btn-lg mr-2">
              See projects
            </Link>
            <Link to="/contact" className="btn btn-danger btn-lg">
              Get in touch
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Hero
