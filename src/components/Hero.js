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
      heroImage: file(relativePath: { eq: "hero-3.jpg" }) {
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
      style={{
        height: `calc(100vh - 60px)`,
        position: "relative",
        backgroundPosition: "bottom left",
      }}
    >
      <Jumbotron style={{ backgroundColor: "transparent" }}>
        <Container>
          <Row style={{ minHeight: "80vh" }}>
            <Col md={6} className="my-auto justify-content-center">
              <h1 className="display-3 font-weight-bold text-light">
                Hi, <br className="d-md-none"></br>I am Jan
              </h1>
              <p className="text-light font-weight-bold">
                A Belgium based Digital Developer who strives to build immersive
                and beautiful web applications through carefully crafted code
                and user-centric design.
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
      <div className="divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
