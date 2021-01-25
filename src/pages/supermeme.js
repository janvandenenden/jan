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
    query supermemeImages {
      mockupmarkExampleImage: file(
        relativePath: { eq: "supermeme-example.jpg" }
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
        relativePath: { eq: "supermeme-example-2.jpg" }
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
        relativePath: { eq: "supermeme-example-3.jpg" }
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
        relativePath: { eq: "supermeme-example-4.jpg" }
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
            <h1 className="display-4">Supermeme</h1>
            <p className="lead">
              <a
                href="https://supermeme.co"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                Supermeme
              </a>{" "}
              is an Supreme style T-shirt generator built with Ruby, React and
              Sass. It uses Stripe as a payment provider and is hosted on
              Heroku.
            </p>
          </Col>
        </Row>
        <Row className="py-3 py-lg-5">
          <Col
            xs={{ span: 12, order: 2 }}
            lg={{ span: 5, order: 1 }}
            className="my-auto"
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
            <h4>Project</h4>
            <p>
              Supreme is popular street wear brand from New York. Its iconic box
              logo has been voted the most powerful logo in the world in 2018.
              You can find it on products ranging from Louis Vuitton hand bags
              and pinball machines to nunchucks and even bricks. It’s fair to
              say this simple, text-based logo has become a meme in recent
              years.
            </p>
            <p>
              From time to time I saw people wearing Supreme T-shirts with
              custom text in the red box logo. I figured it would be fun to
              create a website where anyone can create T-shirts with unique text
              in the Supreme box logo style. Supermeme lets users enter text (up
              to 24 characters) and shows a preview of the design. Users can
              order a white or black T-shirt with their design which is printed
              on demand and delivered to their door.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default MockupMark;
