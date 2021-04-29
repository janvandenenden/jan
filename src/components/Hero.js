import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ChevronDown } from "react-bootstrap-icons";

const HeroContent = styled(Jumbotron)`
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    45deg,
    rgba(1, 22, 39, 0.9) 30.33%,
    rgba(255, 255, 255, 0.25) 101.89%
  );
  a {
    color: #fdfffc;
    &:hover {
      color: #011627;
    }
  }
`;

const Hero = () => {
  const { heroImage } = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-4-copy.jpg" }) {
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
    <BackgroundImage
      fluid={heroImage.childImageSharp.fluid}
      style={{ marginTop: "60px" }}
    >
      <HeroContent fluid>
        <Container>
          <Row>
            <Col xs={10} md={8} lg={6} className="my-auto">
              <h1 className="text-light font-weight-bold pb-3">
                Digital Developer
              </h1>
              <p className="lead font-weight-bold text-light pb-3">
                Howdy, I am Jan <span>👋</span>
                <br />
                Belgium based web developer building immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>

              <Link
                to="/#contact"
                className="btn btn-info btn-lg font-weight-bold"
              >
                Get in touch <ChevronDown size="18" />
              </Link>
            </Col>
          </Row>
        </Container>
      </HeroContent>
    </BackgroundImage>
  );
};

export default Hero;
