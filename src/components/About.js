import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  const data = useStaticQuery(graphql`
    query Image {
      aboutme: file(relativePath: { eq: "hero-2.jpg" }) {
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
    <div className="py-5 bg-light position-relative">
      <Container>
        <Row className="my-5 bg-primary rounded text-light shadow mx-1 mx-md-0">
          <Col md={6} className="my-auto py-5 px-md-5 text-center text-md-left">
            <h1 className="display-4 mt-4 mb-2">About me</h1>
            <p className="small mb-3">Things you might want to know</p>
            <p>
              After obtaining my Masters degree in Sociology I’ve worked as an
              academic researcher at the Free University of Brussels, a project
              manager at a market research firm and as a coach at a web
              development bootcamp. The last year I’ve been working on my own
              projects and learning new skills, like SEO and social media &
              content marketing. Currently I am looking for a job as a front-end
              developer and/or digital project manager and/or data scientist.
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
      <div class="divider-top">
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
    </div>
  );
};

export default About;
