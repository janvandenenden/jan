import React from "react";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRight } from "react-bootstrap-icons";

import Badges from "./Badges";

const ProjectCard = ({ data, image }) => {
  return (
    <Row className="my-5 py-4 px-3 bg-light rounded border border-dark shadow mx-1 mx-md-0">
      <Col
        xs={{ span: 12, order: 1 }}
        md={{ span: 6, order: 1 }}
        className="my-auto"
      >
        <Img
          alt={`Mockup of ${data.title} website on macbook and Iphone`}
          fluid={image}
        />
      </Col>
      <Col
        xs={{ span: 12, order: 2 }}
        md={{ span: 6, order: 2 }}
        className="d-flex flex-column justify-content-center"
      >
        <h2 className="font-weight-bold">{data.title}</h2>
        <div>
          <p>{data.description}</p>
          <AniLink
            paintDrip
            hex="#011627"
            to={data.link}
            className="pt-3 text-info"
          >
            Learn More <ArrowRight size={24} />
          </AniLink>
        </div>

        <Badges technology={data.technology} />
      </Col>
    </Row>
  );
};

export default ProjectCard;
