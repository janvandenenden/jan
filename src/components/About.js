import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutBackgroundImage = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  opacity: 1 !important;
  background: linear-gradient(
    45deg,
    rgba(1, 22, 39, 0.9) 30.33%,
    rgba(255, 255, 255, 0.25) 101.89%
  );
  background-size: cover;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query Image {
      aboutme: file(relativePath: { eq: "background-pattern.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid(
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
    <AboutBackgroundImage fluid={data.aboutme.childImageSharp.fluid}>
      <div className="py-5">
        <Container>
          <Row className="my-5 bg-light rounded text-dark shadow mx-1 mx-md-0">
            <Col
              md={6}
              className="my-auto py-5 px-md-5 text-center text-md-left"
            >
              <h1 className="display-4 mt-4 mb-2">About me</h1>
              <p className="small mb-3">Things you might want to know</p>
              <p>
                After obtaining my Masters degree in Sociology I’ve worked as an
                academic researcher at the Free University of Brussels, a
                project manager at a market research firm and as a coach at a
                web development bootcamp. The last year I’ve been working on my
                own projects and learning new skills, like SEO and social media
                & content marketing. Currently I am looking for a job as a
                front-end developer and/or digital project manager and/or data
                scientist.
              </p>
              <p>You can find my full resume here.</p>
            </Col>
            <Col md={6} className="d-none d-md-flex justify-content-center p-5">
              <Img
                alt="Jan hiking in New Zealand"
                fluid={data.aboutme.childImageSharp.fluid}
                className="rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </AboutBackgroundImage>
  );
};

export default About;
