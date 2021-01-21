import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layout";

const MockupMark = (props) => {
  const image = useStaticQuery(graphql`
    query projectImage {
      mockupmarkImage: file(relativePath: { eq: "mockup-mark.png" }) {
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
  console.log(image);
  return (
    <Layout>
      <Container className="pt-5">
        <Row>
          <Col>
            <h1 className="display-4">Mockup Mark</h1>
            <p className="lead">
              Mockup Mark is an apparel mockup generator that enables artists,
              marketers & ecommerce store owners to easily create realistic
              lifestyle apparel mockups in seconds
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Img
              alt={`Mockup of  website on macbook and Iphone`}
              className="rounded"
              fixed={image.mockupmarkImage.childImageSharp.fixed}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Background</h4>
            <p>
              E-commerce is on the grow and print-on-demand is even growing
              faster. It has never been so easy to start your own clothing or
              apparel brand as in 2021. The growing number of artists and
              print-on-demand store owners want to spend time creating designs,
              optimising their stores and building their audiences.
            </p>
            <h4>Problem</h4>
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
              seconds! Try it for free on{" "}
              <a
                href="https://mockupmark.com/create/free"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                https://mockupmark.com/create/free
              </a>{" "}
              (no sign-up required).
            </p>
            <h4>Technology</h4>
            <p>
              Mockup Mark is build with React.js, Node.js, Sass and ImageMagick,
              uses Stripe as a payment provider and is hosted on Heroku (web
              server) and Amazon Web Services (image generation).
            </p>
            <a
              href="https://mockupmark.com"
              target="_blank"
              rel="noreferrer"
              className="text-info"
            >
              Visit website
            </a>
          </Col>
          <Col>
            <Img
              alt={`Mockup of  website on macbook and Iphone`}
              fluid={image.mockupmarkImage.childImageSharp.fluid}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default MockupMark;
