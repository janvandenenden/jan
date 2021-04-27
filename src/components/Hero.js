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
  background-position: 0% 0%;
`;

const HeroContent = styled(Jumbotron)`
  background-color: transparent;
  height: 100%;
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
  h1 {
    line-height: 0.9;
  }
`;

const Hero = () => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "hero-4-mobile.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
