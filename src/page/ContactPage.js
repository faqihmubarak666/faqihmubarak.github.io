import React, { Component } from "react";
import { Container, Row, Image, Col, Card } from "react-bootstrap";
import phone from "../image/phone.gif";
import email from "../image/email.gif";
import instagram from "../image/instagram.gif";
import "../style/ContactPage.css";

class ContactPage extends Component {
  render() {
    return (
      <div className="container-contact">
        <Container>
          <Card border="primary" className="card-container">
            <Card.Body>
              <Row>
                <Col>
                  <Image className="image-phone" src={phone} roundedCircle />
                </Col>
                <Col>
                  <Card.Title className="text-contact-phone">
                    089672891104
                  </Card.Title>
                </Col>
              </Row>
              <hr />
              <br />

              <Row>
                <Col>
                  <Image className="image-email" src={email} roundedCircle />
                </Col>
                <Col>
                  <Card.Title className="text-contact-email">
                    faqihmubarak666@gmail.com
                  </Card.Title>
                </Col>
              </Row>
              <hr />
              <br />

              <Row>
                <Col>
                  <Image
                    className="image-instagram"
                    src={instagram}
                    roundedCircle
                  />
                </Col>
                <Col>
                  <Card.Title className="text-contact-ig">
                    @faqihmubarak1
                  </Card.Title>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
