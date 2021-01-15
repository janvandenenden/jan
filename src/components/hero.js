import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Hero {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        id
        childImageSharp {
          fluid(
            maxWidth: 2400
            duotone: { highlight: "#e63946", shadow: "#1d3557" }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <Container>
          <Row style={{ minHeight: "80vh" }}>
            <Col md={6} className="my-auto justify-content-center">
              <h1 className="display-2 font-weight-bolder text-light">
                Hi, I am Jan
              </h1>
              <p className="text-light">
                I'm a digital developer interested in data analysis, data
                visualisation and machine learning.
              </p>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Get in touch
              </Link>
            </Col>
          </Row>
        </Container>{" "}
      </Jumbotron>
    </BackgroundImage>
  );
};

export default Hero;
