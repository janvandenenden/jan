import React from "react"
import { Link } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Badges from "./Badges"

const Project = ({ data }) => {
  return (
    <Row className="my-5 py-4 px-3 bg-light">
      <Col md={{ span: 8, order: 2 }}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <Badges technology={data.technology} />
        <Link to={`projects/${data.link}`} className="d-inline-block mt-3">
          Learn More
        </Link>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Project
