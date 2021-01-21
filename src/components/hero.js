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
            duotone: { highlight: "#e5e5e5", shadow: "#14213d" }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      fluid={data.heroImage.childImageSharp.fluid}
      style={{ backgroundPosition: "70% 80%" }}
    >
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <Container>
          <Row style={{ minHeight: "80vh" }}>
            <Col md={6} className="my-auto justify-content-center">
              <h1 className="display-3 font-weight-bold text-primary">
                Hi, <br class="d-md-none"></br>I am{" "}
                <span className="font-weight-bolder">Jan</span>
              </h1>
              <p className="text-dark">
                I'm a digital developer who likes to create gobsmacking websites
                and awesome applications.
              </p>

              <Link
                to="/#contact"
                className="btn btn-info btn-lg mt-2 text-light"
              >
                Get in touch
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </BackgroundImage>
  );
};

export default Hero;
