import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Github, Linkedin, Instagram } from "react-bootstrap-icons";

import Divider from "./Divider";

const Contact = () => {
  return (
    <div className="py-5 bg-tertiary" id="contact">
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
            <p className="lead">
              I am looking for a job as a front-end developer and/or digital
              project manager and/or data scientist.
            </p>
            <Divider text="or contact me on" />
            <div className="d-flex justify-content-around mt-3">
              <a
                href="https://github.com/janvandenenden"
                target="_blank"
                rel="noreferrer"
              >
                <Github color="#14213d" size={56} />
              </a>
              <a
                href="https://www.linkedin.com/in/jan-van-den-enden-410b7820/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin color="#14213d" size={56} />
              </a>
              <a
                href="https://www.instagram.com/janvandenenden/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram color="#14213d" size={56} />
              </a>
            </div>
          </Col>
          <Col
            xs={{ order: "first", span: 12 }}
            md={{ order: "last", span: 6 }}
          >
            <Form
              className="p-3 bg-light rounded shadow"
              name="Jan's contact form"
              ata-netlify="true"
            >
              <input type="hidden" name="Jan's contact form" />
              <Form.Group controlId="formBasicInput">
                <Form.Control placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCompany">
                <Form.Control name="company" placeholder="Company (optional)" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control name="message" as="textarea" rows={8} />
              </Form.Group>

              <Button
                variant="info"
                size="lg"
                block
                type="submit"
                className="text-light"
              >
                Send message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
