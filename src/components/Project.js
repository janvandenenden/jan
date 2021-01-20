import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRight } from "react-bootstrap-icons";

import Badges from "./Badges";

const Project = ({ data, image }) => {
  return (
    <Row className="my-5 py-4 px-3 bg-light rounded shadow mx-1 mx-md-0">
      <Col
        md={{ span: 6, order: 2 }}
        className="d-flex flex-column justify-content-center"
      >
        <h2>{data.title}</h2>
        <div>
          {" "}
          <p className="d-inline mr-2">{data.description}</p>
          <Link to={data.link} className="mt-3 text-info mr-2">
            Learn More
          </Link>
        </div>

        <Badges technology={data.technology} />

        <a
          href={data.website}
          target="_blank"
          rel="noreferrer"
          className="text-info"
        >
          Visit website <ArrowRight color="#fca311" size={24} />
        </a>
      </Col>
      <Col md={{ span: 6, order: 1 }} className="my-auto">
        <Img
          alt={`Mockup of ${data.title} website on macbook and Iphone`}
          fluid={image}
          className="rounded"
        />
      </Col>
    </Row>
  );
};

export default Project;
