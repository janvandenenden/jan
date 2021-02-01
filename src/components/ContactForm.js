import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <Form
      className="p-3 bg-light rounded shadow"
      method="POST"
      name="Jan's contact form"
      data-netlify="true"
      action="/thank-you"
    >
      <input type="hidden" name="form-name" value="Jan's contact form" />
      <Form.Group controlId="formBasicInput">
        <Form.Control placeholder="Name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Enter email" />
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
  );
};

export default ContactForm;
