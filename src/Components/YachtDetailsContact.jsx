import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const YachtDetailsContact = () => {
  return (
    <div className="p-3 shadow" style={{ backgroundColor: "#eeee" }}>
      <Form>
        <Row className="g-0">
          <Col md={6} className="border">
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                placeholder="First Name"
                size=""
                className="rounded-0 border-0"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="border">
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                placeholder="Last Name"
                size=""
                className="rounded-0 border-0"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="border">
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                size=""
                className="rounded-0 border-0"
              />
            </Form.Group>
          </Col>
          <Col md={6} className="border">
            <Form.Group controlId="mobileNumber">
              <Form.Control
                type="tel"
                placeholder="Mobile number"
                size=""
                className="rounded-0 border-0"
              />
            </Form.Group>
          </Col>
          <Col md={12} className="border">
            <Form.Group controlId="subject">
              <Form.Select size="" className="rounded-0 border-0">
                <option>Select subject</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12} className="border">
            <Form.Group controlId="comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "50px" }}
                className="rounded-0 border-0"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-grid gap-2 my-2">
          <Button variant="warning" size="sm">
            Submit Inquiry
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default YachtDetailsContact;
