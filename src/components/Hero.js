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
  opacity: 1 !important;
  background: linear-gradient(
    45deg,
    rgba(1, 22, 39, 0.9) 30.33%,
    rgba(255, 255, 255, 0.25) 101.89%
  );
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 80% 0%;
`;

const HeroContent = styled(Jumbotron)`
  background-color: transparent;
  height: 100%;
  margin-bottom: 0;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    color: #fdfffc;
    &:hover {
      color: #011627;
    }
  }
`;

const Hero = () => {
  const { desktopImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "hero-4-copy.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sources = [
    { ...mobileImage.childImageSharp.fluid, media: `(max-width: 768px)` },
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <HeroBackgroundImage
      fluid={sources}
      role="img"
      preserveStackingContext={true}
    >
      <HeroContent>
        <Container>
          <Row>
            <Col lg={7} className="my-auto justify-content-center">
              <h1 className="display-3 font-weight-bold text-light pb-3">
                Howdy! 👋
                <br />I am Jan
              </h1>
              <p className="text-light font-weight-thin">
                A Belgium based digital developer who strives to build immersive
                and beautiful web applications through carefully crafted code
                and user-centric design.
              </p>

              <Link to="/#contact" className="btn btn-info btn-lg mt-2">
                Get in touch
              </Link>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </HeroContent>
      <Divider position="bottom" />
    </HeroBackgroundImage>
  );
};

export default Hero;
