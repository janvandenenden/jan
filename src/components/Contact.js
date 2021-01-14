import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Contact = () => {
  return (
    <div className="py-5">
      <Container>
        <h1 className="display-4 text-center mt-4 mb-2 text-dark">Contact</h1>
        <p className="text-center small text-dark">Don't be shy!</p>
      </Container>
    </div>
  )
}

export default Contact
