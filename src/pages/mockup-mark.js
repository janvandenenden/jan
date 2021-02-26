import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import Layout from "../components/layout";

const MockupMark = (props) => {
  const images = useStaticQuery(graphql`
    query MockupMarkImages {
      mockupmarkLogo: file(relativePath: { eq: "mockup-mark-logo.png" }) {
        id
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockupmarkExampleImage: file(
        relativePath: { eq: "mockup-mark-example-mockup.jpg" }
      ) {
        id
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockupmarkExampleImage2: file(
        relativePath: { eq: "mockup-mark-example-mockup-2.jpg" }
      ) {
        id
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockupmarkExampleImage3: file(
        relativePath: { eq: "mockup-mark-example-mockup-3.jpg" }
      ) {
        id
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mockupmarkExampleImage4: file(
        relativePath: { eq: "mockup-mark-example-mockup-4.jpg" }
      ) {
        id
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Container>
        <Row className="pt-5">
          <Col>
            <Img
              alt={`Mockup Mark logo`}
              fluid={images.mockupmarkLogo.childImageSharp.fluid}
              className="mx-auto mb-5 d-block w-50"
            />
            <p className="lead">
              <a
                href="https://mockupmark.com"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                Mockup Mark
              </a>{" "}
              is an apparel mockup generator built with React.js, Node.js, Sass
              and ImageMagick. It uses Stripe as a payment provider and is
              hosted on Heroku (web server) and Amazon Web Services (image
              generation).
            </p>
          </Col>
        </Row>
        <Row className="py-3 py-lg-5">
          <Col
            xs={{ span: 12, order: 2 }}
            lg={{ span: 5, order: 1 }}
            className="my-auto shadow"
          >
            <Carousel indicators="false">
              <Carousel.Item>
                <Img
                  alt={`Example of mockup created with the Mockup Mark generator`}
                  fluid={images.mockupmarkExampleImage.childImageSharp.fluid}
                  className="d-block w-100 rounded"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  alt={`Example of mockup created with the Mockup Mark generator`}
                  fluid={images.mockupmarkExampleImage2.childImageSharp.fluid}
                  className="d-block w-100 rounded"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  alt={`Example of mockup created with the Mockup Mark generator`}
                  fluid={images.mockupmarkExampleImage3.childImageSharp.fluid}
                  className="d-block w-100 rounded"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  alt={`Example of mockup created with the Mockup Mark generator`}
                  fluid={images.mockupmarkExampleImage4.childImageSharp.fluid}
                  className="d-block w-100 rounded"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            lg={{ span: 7, order: 2 }}
            className="my-auto"
          >
            <h4>Opportunity</h4>
            <p>
              E-commerce is on the grow and print-on-demand is even growing
              faster. It has never been so easy to start your own clothing or
              apparel brand as in 2021. The growing number of artists and
              print-on-demand store owners want to spend time creating designs,
              optimising their stores and building their audiences.
            </p>
            <p>
              For every design created, store owners need images to promote
              their products on their website and social media. One way to
              obtain images is to organise a photoshoot, but this comes with a
              considerable price tag and is not feasible for everyone. Those who
              know how to Photoshop can create their own mockups (but often end
              up searching hours for photos that fit their brand to subsequently
              edit them and insert their designs).This approach works if you
              have the knowhow and don’t need to create many mockups, but
              remains a frustrating and time consuming process…
            </p>
            <h4>Solution</h4>
            <p>
              Wouldn’t it be great if you can just upload your design in your
              browser, apply it to hundreds of curated images and download your
              mockups in seconds? That’s exactly what you can do with Mockup
              Mark: effortlessly create beautiful apparel mockup images in
              seconds!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default MockupMark;
