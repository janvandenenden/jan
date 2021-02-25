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
  background-position: 60% 100% !important;
  opacity: 1 !important;
  background: linear-gradient(
    45deg,
    rgba(1, 22, 39, 0.9) 30.33%,
    rgba(231, 29, 54, 0.75) 101.89%
  );
  background-size: cover;
  @media (min-width: 768px) {
    background-position: -80% 80% !important;
  }
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
  const data = useStaticQuery(graphql`
    query Hero {
      heroImage: file(relativePath: { eq: "hero-3.png" }) {
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
              <h1 className="display-3 font-weight-bold text-light pb-3">
                Howdy! 👋
                <br />I am Jan
              </h1>
              <p className="text-light lead font-weight-thin text-uppercase">
                A Belgium based digital developer who strives to build immersive
                and beautiful web applications through carefully crafted code
                and user-centric design.
              </p>

              <Link to="/#contact" className="btn btn-info btn-lg mt-2">
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
