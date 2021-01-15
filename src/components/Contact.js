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
    <div className="py-5 bg-light">
      <Container>
        <h1 className="display-4 mt-4 mb-2 text-center text-dark">Contact</h1>
        <p className="text-center small text-dark">
          Let's make something great together.
        </p>
        <Row className="my-5 py-4">
          <Col
            xs={{ order: "last", span: 12 }}
            md={{ order: "first", span: 6 }}
            className="d-flex flex-column justify-content-center mt-5 mt-md-0"
          >
            <p className="lead">
              I am looking for a job as a front-end developer and/or digital
              project manager and/or data scientist.
            </p>
            <Divider text="or contact me on social media" />
            <div className="d-flex justify-content-around mt-3">
              <a
                href="https://github.com/janvandenenden"
                target="_blank"
                rel="noreferrer"
              >
                <Github color="#1d3557" size={56} />
              </a>
              <a
                href="https://www.linkedin.com/in/jan-van-den-enden-410b7820/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin color="#1d3557" size={56} />
              </a>
              <a
                href="https://www.instagram.com/janvandenenden/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram color="#1d3557" size={56} />
              </a>
            </div>
          </Col>
          <Col
            xs={{ order: "first", span: 12 }}
            md={{ order: "last", span: 6 }}
            className="bg-secondary rounded shadow"
          >
            <Form className="p-3">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Don't worry, I won't share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>

              <Button variant="dark" size="lg" type="submit">
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
