import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="py-5 position-relative" id="contact">
      <Container>
        <h1 className="display-4 mt-4 mb-2 text-center text-dark">Contact</h1>
        <p className="text-center small text-dark">
          Let's work on something fun and meaningful
        </p>
        <Row className="my-5 py-4 mx-1 mx-md-0">
          <Col
            xs={{ order: "last", span: 12 }}
            md={{ order: "first", span: 6 }}
            className="d-flex flex-column justify-content-center mt-5 mt-md-0"
          >
            <p className="lead">Interested in doing a project together?</p>
            <p>
              Currently I am accepting freelance work. I'd love to get coffee
              and get to know you, so don’t hesitate to get in touch.
            </p>
          </Col>
          <Col
            xs={{ order: "first", span: 12 }}
            md={{ order: "last", span: 6 }}
          >
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
