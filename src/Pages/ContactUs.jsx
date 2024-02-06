import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import "react-phone-number-input/style.css";
import my_img from "../Images/banner_hcb.png";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const formRef = useRef();

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const phoneNumber = input.replace(/\D/g, "");

    // Apply the desired format
    const formattedPhoneNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );

    return formattedPhoneNumber;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    inquiry: "",
    comments: "",
    comments2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validate and limit the length for the phoneNumber field
    if (name === "phoneNumber") {
      const phoneNumber = value.replace(/\D/g, ""); // Remove non-digit characters
      if (phoneNumber.length <= 10) {
        // Limit to 10 digits
        const formattedValue = formatPhoneNumber(phoneNumber);
        setFormData({ ...formData, [name]: formattedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serviceReqDataRef = collection(db, "Contacts");
      await addDoc(serviceReqDataRef, formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        inquiry: "",
        comments: "",
        comments2: "",
      });
    } catch (error) {
      console.error("Error adding form data to Firestore:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>

      <section className="py-4 py-lg-5" style={{ backgroundColor: "#ebf0f7" }}>
        <Container>
          <Row className="my-md-3 my-lg-0">
            <Col>
              <h3 className="text-center fw-bold mb-3">
                Our teams are ready to assist
              </h3>
              <h6 className="text-center lh-base" style={{ fontSize: "14px" }}>
                Join our network and stay connected by reaching out through the
                provided contact details.
              </h6>
              <p
                className="text-center"
                style={{
                  color: "#537FE7",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                "We'd love to support you!"
              </p>
              <div className="text-center">
                <Button
                  className="lh-base mt-3"
                  variant="outline-dark"
                  onClick={scrollToForm}
                >
                  Get Help
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-0">
        <Container>
          <Row className="my-md-3 my-lg-5">
            <Col>
              <h4 className="text-center mb-3">
                Get in Touch:{" "}
                <span className="fw-bold">Find Us on the Map</span>
              </h4>
              <h6
                className="text-center mb-3 col-md-10 mx-auto lh-base mb-4"
                style={{ fontSize: "14px" }}
              >
                You can find us in the heart of Anytown, conveniently situated
                near major transportation hubs and accessible by public
                transportation. Our central location ensures easy access for our
                valued customers.
              </h6>
              <div className="ratio ratio-21x9" style={{ height: "500" }}>
                <iframe
                  title="Megasails"
                  className="rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0085402897435!2d-80.16863632590338!3d26.065977295967695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x573707b841e4849%3A0x867d66c7c628fdf8!2sMegaSails.com!5e0!3m2!1sen!2sin!4v1684746496601!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="c-contact-us" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid className="col-lg-11 py-3">
          <div class="text-center">
            <h4 class="py-2 c-heading">Let's Get In Touch</h4>
            <hr class="hr-1" />
            <p>
              <small>
                Send us a messages and we will get back to you as soon as
                possible!
              </small>
            </p>
          </div>
          <Row>
            <Col md={12} lg={6} ref={formRef}>
              <Form onSubmit={handleSubmit}>
                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="firstName">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="lastName">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="email">
                      <Form.Control
                        className="mb-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        className="mb-2"
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone (123) 456-7890"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-2">
                  <Col lg={6}>
                    <Form.Group controlId="city">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="state">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="inquiry">
                  <Form.Control
                    className="mb-2"
                    as="select"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Inquiry...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comments">
                  <Form.Control
                    className="mb-2"
                    as="textarea"
                    placeholder="Leave your comments"
                    rows={3}
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="comments2">
                  <Form.Control
                    className="mb-2"
                    as="textarea"
                    rows={3}
                    name="comments2"
                    placeholder="Do you currently own a boat? If so, what kind?"
                    value={formData.comments2}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    className="btn custom-contact-btn text-uppercase"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
            <Col xs={12} md={12} lg={6} className="">
              <img src={my_img} alt="" className="img-fluid" />
              {/* src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png" */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
