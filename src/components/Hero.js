import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Divider from "./Divider";

const HeroBackgroundImage = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  background-position: bottom center !important;
  opacity: 1 !important;
  background: linear-gradient(
    48deg,
    rgba(20, 32, 61, 0.75) 50.33%,
    rgba(252, 163, 17, 0.6) 100.89%
  );
  background-size: cover;
`;

const HeroContent = styled(Jumbotron)`
  background-color: transparent;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Hero {
      heroImage: file(relativePath: { eq: "hero-3.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
      <HeroContent>
        <Container>
          <Row>
            <Col lg={7} className="my-auto justify-content-center">
              <h1 className="display-3 font-weight-bold text-light">
                Hi, <br className="d-md-none" />I am Jan
              </h1>
              <p className="text-light font-weight-bold">
                A Belgium based digital developer who strives to build immersive
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
      </HeroContent>
      <Divider position="bottom" />
    </HeroBackgroundImage>
  );
};

export default Hero;
